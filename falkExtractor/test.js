const { JSDOM } = require("jsdom");
const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");

const infoURL = "https://www.fernsehserien.de/falk/episodenguide";
const ardURL = "https://www.ardmediathek.de/suche/falk";

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

async function searchEpisodesARD() {
  try {
    const response = await fetch(ardURL);
    if (response.ok) {
      const data = await response.text();
      const dom = new JSDOM(data);
      const document = dom.window.document;

      const divs = document.querySelectorAll(".b1j6rvt8.bywpysb");

      divs.forEach((div) => {
        const link = div.querySelector("a.b1e83sjn");
        const href = link?.href;

        const img = div.querySelector("img");
        const imgTitle = img?.title; 

        console.log(imgTitle, href);
        console.log(" ");
      });
    }
  } catch (err) {
    console.error(err);
  }
}

searchEpisodesARD();
