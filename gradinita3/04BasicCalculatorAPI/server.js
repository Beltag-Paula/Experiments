// 3. Basic Calculator API
//     • What: Create endpoints for addition, subtraction, multiplication, and division.
//     • Skills: Query parameters, parsing numbers, sending JSON responses.
//     • Stretch: Return errors for invalid input or division by zero.
const {evaluate} = require("mathjs");
const express = require('express');

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(express.static("public"));

app.post("/=", (request, response)=>{
    try{
    console.log(" I have received this text from your calculator");
    console.log(request.body.content);

    const finalCalculation = evaluate(request.body.content);
    console.log(finalCalculation);


    response.status(200).json({
      message: "yes",
      solution: finalCalculation === Infinity ? "You cannot divide by 0": finalCalculation,
    });
    }
    catch(err){
        console.error(err);
        return response.status(500).json({error: err});
    }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});