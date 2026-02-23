// Title: DSL Parsing (Expert)
// Goal: Create a tag function that parses a template into a SQL query object (simulated).
// Input: query tag on "SELECT * FROM users WHERE id = ${id}"
// Output: { sql: "SELECT * FROM users WHERE id = ?", params: [id] }

function query(strings, ...values){
    //Join the string parts using "?" as the connection for variables
    const sql = strings.join('?');

    //return a structured object instead of just a string
    return {
        sql: sql,
        params: values
    };
}

const id = 42;
const result = query`Select * FROM users WHERE id = ${id}`;

console.log(result);

/* Output: 
{ 
  sql: "SELECT * FROM users WHERE id = ?", 
  params: [42] 
} 
*/