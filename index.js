

//  WORKSHOP USING EXPRESS, WEEK 8 THE ACTIVITY IS IN DRIVE!


const express = require('express');
const port = 000;
const app = express();

const things = [
    { id: 1, name:'Socks' },
    { id: 2, name:'Computer' },
    { id: 3, name:'Passion' },
    { id: 4, name:'Alegria' },
    { id: 5, name:'Razor Blades' },
    { id: 6, name: 'Passion Fruit' },
    { id: 1, name:'Socks' },
    { id: 2, name:'Computer' },
    { id: 3, name:'Passion' },
    { id: 4, name:'Alegria' },
    { id: 5, name:'Razor Blades' },
    { id: 6, name:'Passion Fruit' }
    
];


  
app.get('/things/:id', (req, res) => {

    let captureOfId = parseInt(req.params.id);
    let filtering = things.filter(el => el.id === captureOfId);

    res.json(filtering);

});

app.get('/things', (req, res) => {

    let chosen = req.query.limit;
    console.log(chosen);

    if (!chosen) {
        let subset = things.lenght <= 10 ? things : things.slice(0, 10);
        res.json(subset)
    } else {
        let onlyNumber = things.slice(0, parseInt(chosen));
        res.json(onlyNumber);
    }

});


app.get("/things", (req, res) => {


    let onlyNames = req.query.name;

    let filtering = things.filter(el => el.name === onlyNames);
    console.log(filtering)

    res.json(filtering)

});

app.get("/things", (req, res) => {
    console.log(req.query);
     res.json(things);
 });



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
  



  
