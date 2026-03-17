const mainNotes = document.getElementById("notes-list");
const searchNotes = document.getElementById("searchInput");

function createActionIcon(className, handler) {
  const icon = document.createElement("i");
  icon.className = `fa-regular ${className}`;
  icon.addEventListener("click", handler);
  return icon;
}

function renderNote(note) {
  const noteContainer = document.createElement("div");
  noteContainer.className = "cardNote";

  const actions = document.createElement("div");
  actions.className = "note-actions";

  const deleteIcon = createActionIcon("fa-solid fa-delete-left", () => {
    deleteNote(note);
  });

  const updateIcon = createActionIcon("fa-pen-to-square", () => {
    updateNote(note);
  });

  actions.append(updateIcon, deleteIcon);

  const title = document.createElement("h3");
  title.textContent = note.title;

  const description = document.createElement("h5");
  description.textContent = note.content;

  noteContainer.append(actions, title, description);

  note.tags.forEach((tag) => {
    const tagDiv = document.createElement("div");
    tagDiv.className = "tag-button";
    tagDiv.textContent = tag;
    noteContainer.append(tagDiv);
  });

  mainNotes.append(noteContainer);

  const line = document.createElement("hr");
  mainNotes.append(line);
}

async function getNotes(searchFilter) {
  const queryParam = searchFilter ? `?searchFilter=${searchFilter}` : "";
  const response = await fetch(`/api/notes${queryParam}`);
  const data = await response.json();

  mainNotes.innerHTML = "";
  data.forEach((note) => renderNote(note));
}

function searchNote() {
  getNotes(searchNotes.value);
}

async function createNote() {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-description").value;
  const tags = document
    .getElementById("note-tags")
    .value.split(" ")
    .map((tag) => tag.trim());

  if (!title || !content || !tags) {
    alert("Title, content and tags are required in order to create a new note");
    return;
  }

  try {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        tags,
      }),
    });

    if (response.ok) {
      document.getElementById("note-title").value = "";
      document.getElementById("note-description").value = "";
      document.getElementById("note-tags").value = "";

      getNotes();
    }
  } catch (err) {
    console.error("Error frontend createNote, ", err);
  }
}

async function deleteNote(note) {
  try {
    const response = await fetch(`/api/notes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: note.title }),
    });

    if (response.ok) {
      alert("Note deleted successfully");
      getNotes();
    } else {
      console.log("Failed to delete");
    }
  } catch (err) {
    console.error("Error frontend deleteNote, ", err);
  }
}


async function updateNote(note) {
  const newTitle = prompt("New title:", note.title);
  const newContent = prompt("New content:", note.content);
  const newTags = prompt("Tags (space separated):", note.tags.join(" "));

  try {
    const response = await fetch(`/api/notes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //old title!
        title1: note.title,
        title2: newTitle,
        content: newContent,
        tags: newTags.split(" "),
        newTitle: newTitle,
      }),
    });

    if (response.ok) {
      alert("Note updated successfully");
      getNotes();
    }
  } catch (err) {
    console.error("Error frontend updateNote, ", err);
  }
}

getNotes();

//////////////////////////////
let themeIndex = 0;
const themes = [
  {
    bg1: "#ecfdf5",
    bg2: "#fff7ed",
    primary: "#10b981",
    secondary: "#f97316",
    card: "#f0fdf4",
    border: "#bbf7d0",
    tagbg: "#fff7ed",
    tagcolor: "#ea580c",
    text: "#065f46",
  },
  {
    bg1: "#eff6ff",
    bg2: "#f5f3ff",
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    card: "#f0f7ff",
    border: "#bfdbfe",
    tagbg: "#ede9fe",
    tagcolor: "#6d28d9",
    text: "#1e3a8a",
  },
  {
    bg1: "#fff1f2",
    bg2: "#fff7ed",
    primary: "#f43f5e",
    secondary: "#fb923c",
    card: "#fff1f2",
    border: "#fecdd3",
    tagbg: "#ffe4e6",
    tagcolor: "#be123c",
    text: "#9f1239",
  },
  {
    bg1: "#ecfeff",
    bg2: "#f0fdfa",
    primary: "#14b8a6",
    secondary: "#06b6d4",
    card: "#f0fdfa",
    border: "#99f6e4",
    tagbg: "#ccfbf1",
    tagcolor: "#0f766e",
    text: "#134e4a",
  },
];

function changeTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  const t = themes[themeIndex];

  document.documentElement.style.setProperty("--bg1", t.bg1);
  document.documentElement.style.setProperty("--bg2", t.bg2);
  document.documentElement.style.setProperty("--primary", t.primary);
  document.documentElement.style.setProperty("--secondary", t.secondary);
  document.documentElement.style.setProperty("--card-bg", t.card);
  document.documentElement.style.setProperty("--card-border", t.border);
  document.documentElement.style.setProperty("--tag-bg", t.tagbg);
  document.documentElement.style.setProperty("--tag-color", t.tagcolor);
  document.documentElement.style.setProperty("--text-main", t.text);
}
