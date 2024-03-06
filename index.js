const express = require("express");
const app = express();

app.get("/task", (req, res) => {
    return res.json({ Key: 'Value' });
});


//Post

app.post("/task", (req, res) => {
    const new_data = req.body;

    return res.json({

        message: "Successfully added!",
    });
})


//put
app.put("/task/:id", (req, res) => {
    const id = req.params.id;

    const data = req.body;

    
    }
    );


    app.listen(6000, () => {
        console.log("Express server is running!");
    }
    );