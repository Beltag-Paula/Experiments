const { JSDOM } = require("jsdom");
const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");

const infoURL = "https://www.fernsehserien.de/falk/episodenguide";

async function getAllEpisodeTitles() {
  try {
    const response = await fetch(infoURL);
    if (response.ok) {
      const data = await response.text();
      const dom = new JSDOM(data);
      const document = dom.window.document;

      const divs = document.querySelectorAll(
        ".episodenliste-2019-episodentitel",
      );

      const episodeTitles = [...divs]
        .map((div) => div.querySelector("span")?.textContent.trim())
        .filter(Boolean);

      console.log(episodeTitles);
      return episodeTitles;
    } else {
      console.log("Failed to find titles");
      return [];
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}


module.exports = { getAllEpisodeTitles };