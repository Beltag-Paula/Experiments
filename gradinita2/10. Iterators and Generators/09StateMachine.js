// Title: State Machine (Expert)
// Goal: Implement a traffic light system.
// Input: Generator yields 'Green', waits for input, yields 'Yellow'.
// Output: External controller toggles state via .next().

function* auPisicileSemafor(){
    while(true){
        yield "Green";
        yield "Yellow";
        yield "Red";
    }
}

const semafor = auPisicileSemafor();

let i = 1;
while (i <= 10) {
  console.log(semafor.next().value);
  i++;
}
