// 10. Complex Transformation (Expert)
// Goal: Format full name and standardise dates (YYYY-MM-DD).
// Input: [{"f": "John", "l": "Doe", "d": "10/02/2023"}]
// Output: [{"fullName": "John Doe", "date": "2023-10-02"}]

const input = [{ f: "John", l: "Doe", d: "10/02/2023" }];

const output = input.map((x)=>{
    const myDate = x.d.split("/");

    //const newDate = myDate[2] + "-" + myDate[0] + "-" + myDate[1];
    //const newDate = `${myDate[2]}-${myDate[0]}-${myDate[1]}`;
    //console.log(newDate)

    //const newName = x.f+" "+ x.l;
    //const newName = `${x.f} ${x.l}`
    return {
      fullname: `${x.f} ${x.l}`,
      date: `${myDate[2]}-${myDate[0]}-${myDate[1]}`,
    };
})

console.log(output);


//pasul1: split
//10 02 2023
//pasul 2reverse: 2023. 02, 10
//pasul 3: x[2] =x[1] si vice versa 
//pasul 4: pune-le inapoi ca string + "-" intre ele

