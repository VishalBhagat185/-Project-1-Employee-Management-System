const express = require('express');
const app = express();

app.use(express.json());

// Create employee Store
let employee = [];

// Add employee : 
app.post('/add', (req, res) => {
    const { name, age } = req.body;

    employee.push({
        id: employee.length + 1,
        name,
        age
    });

    res.send("New Employee Add! ✅");
});

// Get All Employees :
app.get('/employee', (req, res) => {
    res.json(employee);
});

// Delete Employee :
app.delete('/delete/:id',(req,res)=>{
       const id = req.params.id;
       employee = employee.filter(emp=>emp.id !== id );
       res.send("Delete Employee")
});


// Start Server :
app.listen(3000, () => {
    console.log("Server is Running ✅");
});