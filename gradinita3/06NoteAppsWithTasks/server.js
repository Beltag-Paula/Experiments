const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

app.use(express.static("public"));

let myNotes = [
  {
    title: "Buy groceries",
    content: "Milk, eggs, bread, chicken, and apples from the supermarket.",
    tags: ["shopping", "personal", "errands"],
  },
  {
    title: "Finish JavaScript homework",
    content: "Complete Express API exercise and review async/await.",
    tags: ["school", "javascript", "coding"],
  },
  {
    title: "Morning workout",
    content: "Run for 20 minutes and do push-ups and squats.",
    tags: ["health", "fitness"],
  },
  {
    title: "Read programming book",
    content: "Read chapters about Node.js and REST APIs.",
    tags: ["reading", "coding", "learning"],
  },
  {
    title: "Clean apartment",
    content: "Vacuum, wash dishes, and organize desk.",
    tags: ["home", "chores"],
  },
  {
    title: "Study CSS",
    content: "Practice flexbox and grid layout exercises.",
    tags: ["coding", "css", "learning"],
  },
  {
    title: "Call mom",
    content: "Ask how she is doing and plan weekend visit.",
    tags: ["family", "personal"],
  },
  {
    title: "Watch tech tutorial",
    content: "Watch a YouTube video about building APIs with Express.",
    tags: ["learning", "coding", "video"],
  },
  {
    title: "Prepare presentation",
    content: "Create slides for the school project about web development.",
    tags: ["school", "presentation"],
  },
  {
    title: "Car maintenance",
    content: "Check oil level and tire pressure.",
    tags: ["car", "maintenance"],
  },
  {
    title: "Meditation session",
    content: "10 minutes of breathing and mindfulness.",
    tags: ["health", "mindfulness"],
  },
  {
    title: "Plan weekend trip",
    content: "Search for hotels and attractions nearby.",
    tags: ["travel", "planning"],
  },
  {
    title: "Practice coding",
    content: "Solve 3 JavaScript problems on coding practice websites.",
    tags: ["coding", "practice"],
  },
  {
    title: "Laundry day",
    content: "Wash clothes and fold them after drying.",
    tags: ["home", "chores"],
  },
  {
    title: "Grocery meal prep",
    content: "Prepare chicken, rice, and vegetables for the week.",
    tags: ["food", "health"],
  },
  {
    title: "Research laptops",
    content: "Compare prices and reviews for programming laptops.",
    tags: ["tech", "research"],
  },
  {
    title: "Team meeting",
    content: "Discuss progress on the group web project.",
    tags: ["work", "meeting"],
  },
  {
    title: "Update portfolio",
    content: "Add the notes app project to GitHub portfolio.",
    tags: ["coding", "career"],
  },
  {
    title: "Watch movie",
    content: "Relax in the evening and watch a sci-fi movie.",
    tags: ["entertainment", "relax"],
  },
  {
    title: "Fix bike",
    content: "Repair the loose chain and check brakes.",
    tags: ["repair", "bike"],
  },
  {
    title: "Learn Git commands",
    content: "Practice git commit, push, pull, and branching.",
    tags: ["coding", "git"],
  },
  {
    title: "Morning walk",
    content: "Take a 30-minute walk in the park.",
    tags: ["health", "outdoors"],
  },
  {
    title: "Write journal",
    content: "Reflect on today's progress and plans for tomorrow.",
    tags: ["personal", "writing"],
  },
  {
    title: "Backup files",
    content: "Save important documents and photos to cloud storage.",
    tags: ["tech", "backup"],
  },
  {
    title: "Practice English",
    content: "Read articles and learn 10 new words.",
    tags: ["learning", "language"],
  },
  {
    title: "Cook dinner",
    content: "Prepare pasta with tomato sauce and salad.",
    tags: ["food", "cooking"],
  },
  {
    title: "Stretching routine",
    content: "10-minute stretching after workout.",
    tags: ["health", "fitness"],
  },
  {
    title: "Check emails",
    content: "Reply to work and school emails.",
    tags: ["work", "communication"],
  },
  {
    title: "Organize files",
    content: "Sort programming projects into folders.",
    tags: ["coding", "organization"],
  },
  {
    title: "Learn Express middleware",
    content: "Understand how middleware works in Express.js.",
    tags: ["coding", "nodejs", "learning"],
  },
];
//get + filter (read)
//patch (update)
//post (add/create)
//delete (delete)

app.get("/api/notes", (request, response) => {
  try {
    const { searchFilter } = request.query;

    if (!searchFilter) {
      return response.status(200).json(myNotes);
    }

    const filteredNotes = myNotes.filter((note) => {
      const findTitle = note.title
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
      const findContent = note.content
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
      const findTags = note.tags.some((tag) =>
        tag.toLowerCase().includes(searchFilter.toLowerCase()),
      );

      return findTitle || findContent || findTags;
    });
    response.status(200).json(filteredNotes);
  } catch (err) {
    response
      .status(400)
      .json({ message: `Couldn't retrieve the notes ${err}` });
  }
});

app.post("/api/notes", (request, response) => {
  try {
    console.log(request.body);

    const { title, content, tags } = request.body;

    const newNote = {
      title,
      content,
      tags,
    };

    myNotes.push(newNote);
    response.status(200).json(newNote);
  } catch (err) {
    response.status(400).json({ message: `Couldn't make a new note ${err}` });
  }
});

app.delete("/api/notes", (request, response) => {
  try {
    const foundTitle = request.body.title;

    const thatNote = myNotes.find((note) => note.title === foundTitle);

    if (!thatNote) {
      return response.status(404).json({
        message: "Note not found",
      });
    }

    myNotes = myNotes.filter((note) => note.title !== foundTitle);

    response.json({ message: "Note deleted" });
  } catch (err) {
    response.status(400).json({
      message: `Couldn't delete the note ${err}`,
    });
  }
});

app.patch("/api/notes", (request, response) => {
  try {
    const { title1, title2, content, tags } = request.body;

    const thatNote = myNotes.find((note) => note.title === title1);

    if (!thatNote) {
      return response.status(404).json({ message: "Couldn't find the note" });
    }

    const updatedNote = {
      ...thatNote,
      title: title2 || thatNote.title,
      content: content || thatNote.content,
      tags: tags || thatNote.tags,
    };

    const index = myNotes.indexOf(thatNote);
    myNotes.splice(index, 1, updatedNote);

    response.status(200).json(updatedNote);
  } catch (err) {
    response.status(400).json({ message: `Couldn't update the note ${err}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
