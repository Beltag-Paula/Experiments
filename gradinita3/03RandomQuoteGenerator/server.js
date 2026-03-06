//  Random Quote Generator
//     • What: Serve a random quote when a user hits /quote.
//     • Skills: Arrays, random selection, Express routes.
//     • Stretch: Add the ability to add new quotes via POST requests.

const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.text({ type: "text/plain" }));

app.use(express.static("public"));

const myQuotes = [
  "A cloud weighs around a million tonnes due to its volume and density, yet floats because it's slightly less dense than the surrounding air.",
  "Giraffes are 30 times more likely to be struck by lightning than humans, thanks to their height and habitat in open savannas. ",
  "Identical twins don’t have the same fingerprints, as subtle differences in the womb environment affect their development.",
  "Earth’s rotation is slowing, meaning a day increases by about 1.8 seconds per century—600 million years ago, a day lasted only 21 hours.",
  "Octopuses don’t have tentacles—they have eight arms, while true tentacles (with suckers only at the tip) are found in squids and cuttlefish.",
  "The world’s oldest dog lived to 29.5 years, and the oldest cat reached 38 years and 3 days.",
  "Water might not be wet—scientists define wetness as a liquid’s ability to stick to a solid surface, so water itself isn’t wet, but can make other things wet.",
  "The Sun makes a sound, but it’s inaudible to humans because the pressure waves are too long to be heard.",
  "Mars isn’t round—it’s shaped like a rugby ball, with different diameters along its three axes. ",
  "The Universe’s average color is called “Cosmic latte”, a beige hue derived from combining light from all galaxies. ",
  "A chicken once lived 18 months without a head, surviving due to a partially intact brainstem and jugular vein.",
  "All the world’s bacteria stacked together would stretch 10 billion light-years, wrapping around the Milky Way over 20,000 times.",
  "Wearing a tie can reduce blood flow to the brain by up to 7.5%, potentially causing dizziness or headaches.",
  "The fear of long words is called “Hippopotomonstrosesquippedaliophobia”, a 36-letter word itself.",
  "Mount Everest isn’t the tallest mountain—Mauna Kea in Hawaii is over 10 km tall when measured from its underwater base.",
];

app.get("/quote", (request, response) => {
  const randomQuote = Math.floor(Math.random() * myQuotes.length);
  return response.json({ quote: myQuotes[randomQuote] });
});


//note for me in the future, plz read this doc:
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// if you don't do that, instead of tarlaparla you get fquote=tarlaparla!!!
app.post("/quote", (request, response) => {
  try{
  const newQuote = request.body;
  const searchParams = new URLSearchParams(newQuote);
  const quoteTextFromFront = searchParams.get("fquote");
  myQuotes.push(quoteTextFromFront);
  
  /*response
    .status(200)
    .json({ message: "Task was sucessfully created", quote: quoteTextFromFront });
    */
   response.status(200).redirect("/");
  }
  catch(err){
    console.err("Something went wrong"+err);
    response.status(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
