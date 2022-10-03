const express = require('express')
const app = express()
const sql = require("mssql");
const config = {
    user: 'apiuser',
    password: 'apiuser',
    server: 'localhost',
    database: 'PetHotel',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    
      },
};

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2"] })
    // return res;
})

app.post("/schedule", (req, res) => {

    sql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new sql.Request();
        console.log(req.body)
        var query = 'insert into dbo.Pets (PetName, Details, PhoneNo, Email, PetAge, StartDate, EndDate) values(\'' + req.body.petName + '\', \'' + req.body.details + '\', \'' + req.body.phoneNo + '\', \'' + req.body.email + '\', \'' + req.body.petAge + '\', \'' + req.body.startDate + '\', \'' + req.body.endDate + '\')';
        request.query(query, function (err, recordset) {

            if (err) res.status(500).send({ message: "Eroare SQL" })

            res.status(200).send({ message: "Programare realizata cu succes :), va vom contacta in curand pentru confirmare!", "result": "ok" })
        });
    });
})

app.listen(5000, () => console.log("Server started port 5000"))

