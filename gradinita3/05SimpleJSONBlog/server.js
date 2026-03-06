// 4. Simple JSON Blog
//     • What: API to create, read, and delete blog posts stored in memory.
//     • Skills: CRUD operations, handling JSON bodies.
//     • Stretch: Add timestamps and basic search functionality.

const express = require("express");

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(express.static("public"));

//mock up db:
let myBlogs = [
  {
    id: Date.now(),
    title: "Title 1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: "img.png",
    textContent: ["text1", "text2"],
  },
  {
    id: Date.now() + 1,
    title: "Title 2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: "img.png",
    textContent: ["text1", "text2"],
  },
  {
    id: Date.now() + 2,
    title: "Title 3",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: "img.png",
    textContent: ["text1", "text2"],
  },
  {
    id: Date.now() + 3,
    title: "Title 4",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: "img.png",
    textContent: ["text1", "text2"],
  },
];

///////////////////////////////////////////////
//post - to create; get - to read; to delete- to delete;
// app.get("/api/blogs", (request, response) => {
//   try {
//     response.status(200).json(myBlogs);
//   } catch (err) {
//     console.err("Something went wrong " + err);
//   }
// });

app.get("/api/blogs", (request, response) => {
  const { search } = request.query;

  if (!search) {
    return response.status(200).json(myBlogs);
  }

  const filteredBlogs = myBlogs.filter((blog) => {
    const titleMatch = blog.title.toLowerCase().includes(search.toLowerCase());

    const textMatch = blog.textContent.some((text) =>
      text.toLowerCase().includes(search.toLowerCase()),
    );

    return titleMatch || textMatch;
  });

  response.status(200).json(filteredBlogs);
});

app.get("/api/blog/:id", (request, response) => {
  const foundID = parseInt(request.params.id);
  const thatBlog = myBlogs.find((blog) => blog.id === foundID);
  if (!thatBlog) {
    response.status(404).json({ message: `Blog with ${foundID} not found` });
  } else {
    response.status(200).json(thatBlog);
  }
});

app.post("/api/blog", (request, response) => {
  console.log(request.body);

  const { title, image, textContent } = request.body;

  const newBlog = {
    id: Date.now(),
    title,
    image,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    textContent,
  };

  myBlogs.push(newBlog);

  response.status(201).json(newBlog);
});
app.delete("/api/blog/:id", (request, response) => {
  const foundID = parseInt(request.params.id);
  const thatBlog = myBlogs.find((blog) => blog.id === foundID);
  if (!thatBlog) {
    response.status(404).json({ message: `Blog with ${foundID} not found` });
  } else {
    myBlogs = myBlogs.filter((blog) => blog.id !== foundID);
    response
      .status(200)
      .json({ message: `${thatBlog} was deleted sucessfully` });
  }
});

//update (put is full update and patch is partial update)

app.patch("/api/blog/:id", (request, response) => {
  const foundID = parseInt(request.params.id);
  const thatBlog = myBlogs.find((blog) => blog.id === foundID);
  if (!thatBlog) {
    response.status(404).json({ message: `Blog with ${foundID} not found` });
  } else {
    const updatedBlog = {
      ...thatBlog,
      title: request.body.title || thatBlog.title,
      image: request.body.image || thatBlog.image,
      textContent: request.body.textContent || thatBlog.textContent,
      updatedAt: new Date().toISOString(),
    };

    // deletes from index, amount, inserts new elements at that index
    const oldIndexOftask = myBlogs.indexOf(thatBlog);
    myBlogs.splice(oldIndexOftask, 1, updatedBlog);

    response.status(200).json(updatedBlog);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
