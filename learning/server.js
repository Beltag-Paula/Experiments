const express = require('express');

const app = express();
const PORT = 3000;
const users = [
    {
        id: 1,
        username: "alice",
        password: "password123",
        location: "New York, USA"
    },
    {
        id: 2,
        username: "bob",
        password: "qwerty456",
        location: "Berlin, Germany"
    },
    {
        id: 3,
        username: "charlie",
        password: "letmein789",
        location: "Tokyo, Japan"
    },
    {
        id: 4,
        username: "diana",
        password: "testpass321",
        location: "Sydney, Australia"
    },
    {
        id: 5,
        username: "eve",
        password: "mockpass654",
        location: "Toronto, Canada"
    }
];

app.set("json spaces", 2);


app.get('/', (request, respoonse) => {
    respoonse.send("HEEEEEEEELLLLLLLOOOOOOOO")
})

app.get('/Y', (request, response) => {
    response.json(users);
})

app.get('/Kaka/:nume', (request, response)=>{
    const daName = request.params.nume;

    const requestedName = users.find((user)=>user.username===daName)

    response.json(requestedName);
})

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})