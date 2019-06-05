const data = {
    "draw": 1,
    "version": 1,
    "recordsTotal": 57,
    "recordsFiltered": 57,
    "data": [
        [
            "Airi",
            "Satou",
            "Accountant",
            "Tokyo",
            "28th Nov 08",
            "$162,700"
        ],
        [
            "Angelica",
            "Ramos",
            "Chief Executive Officer (CEO)",
            "London",
            "9th Oct 09",
            "$1,200,000"
        ],
        [
            "Ashton",
            "Cox",
            "Junior Technical Author",
            "San Francisco",
            "12th Jan 09",
            "$86,000"
        ],
        [
            "Bradley",
            "Greer",
            "Software Engineer",
            "London",
            "13th Oct 12",
            "$132,000"
        ],
        [
            "Brenden",
            "Wagner",
            "Software Engineer",
            "San Francisco",
            "7th Jun 11",
            "$206,850"
        ],
        [
            "Brielle",
            "Williamson",
            "Integration Specialist",
            "New York",
            "2nd Dec 12",
            "$372,000"
        ],
        [
            "Bruno",
            "Nash",
            "Software Engineer",
            "London",
            "3rd May 11",
            "$163,500"
        ],
        [
            "Caesar",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ],
        [
            "Cara",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Cedric",
            "Kelly",
            "Senior Javascript Developer",
            "Edinburgh",
            "29th Mar 12",
            "$433,060"
        ]
    ]
};

const express = require('express');
const app = express();
const port = 3000;
const inspect = require('util').inspect;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/get/tech-events', (req, res) => res.status(200).send(JSON.stringify(data)));
app.get('/get/data-version', (req, res) => res.status(200).send(JSON.stringify(data.version)));
app.get('/update/data-version/:id', (req, res) => {//In real world should be PUT...
    const newVersion = req.params.id;
    data.version = newVersion;
    console.log('asd');
    // res.send(JSON.stringify(`Version updated to: ${newVersion}`));
    res.status(200).send(`Version updated to: ${newVersion}`);
});

app.listen(port, () => console.log(`Listening on ${port}!`));