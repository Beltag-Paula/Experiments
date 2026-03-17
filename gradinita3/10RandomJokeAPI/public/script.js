const outputAll = document.getElementById("outputAllJokes");
const outputJoke = document.getElementById("outputGetJoke");
const outputRandom = document.getElementById("outputRandomJoke");

async function getAllJokes() {
  try {
    const response = await fetch("/api/v1/all");
    const data = await response.json();

    console.log(data.rows);

    let output = "";

    if (data.rows !== undefined) {
      data.rows.forEach((row) => {
        output += `<p>${row.id}, ${row.botJoke}</p>`;
      });
    }

    outputAll.innerHTML = output;
  } catch (err) {
    console.log("Error getting jokes from server", err);
  }
}

async function getRandomJokes() {
  try {
    const response = await fetch("/api/v1/random");
    const data = await response.json();
    
    if (data && data.id) {
      let output = `<p>ID: ${data.id} - ${data.botJoke}</p>`;
      outputRandom.innerHTML = output;
    } else {
      outputRandom.innerHTML = "No jokes found!";
    }
  } catch (err) {
    console.log("Error getting a random joke from server ", err);
  }
}

async function addNewJoke() {
  const newPhrase = prompt("Enter your joke ");

  if (newPhrase) {
    try {
      const response = await fetch("/api/v1/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newPhrase,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Database updated " + data.message);
      } else {
        alert("Error " + data.message);
      }
    } catch (err) {
      alert("Failed to connect to server");
    }
  }
}
