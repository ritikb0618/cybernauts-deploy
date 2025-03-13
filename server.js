const express=require("express");
const app = express();
const path=require("path")

const static_path=path.join(__dirname,"public");
app.use(express.static(static_path));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mysql2=require("mysql2");
app.listen(7700,function(req,resp){
    console.log("started the port at 7700");
});


var mysql = mysql2.createConnection(config);
mysql.connect(function (err) {
    if (err == null)
        console.log("Connected To Database Successfulllyyyy");
    else
        console.log(err.message + "  ########");
})



// let config = {
//     host: "127.0.0.1",
//     user: "root",
//     password: "yaten@123",
//     database: "cybernauts",
//     dateStrings: true
// }
// let config = {
//     host: "btxtepcx8u7on4ybe1se-mysql.services.clever-cloud.com",
//     user: "uf2ixj3g7jih9sb5",
    
//     password: "KzhNc4jWnFx0xmFHln9",
//     database: "btxtepcx8u7on4ybe1se",
//     dateStrings: true,
//     connectTimeout: 30000,
//     keepAliveInitialDelay: 10000,
//     enableKeepAlive: true,
// }


app.get("/form", function (req, resp) {
    var path = __dirname + "/public/form.html";
    resp.sendFile(path);
})

app.post("/save-process", function (req, resp) {
    // console.log(req.body); // Debugging: Log the entire request body

    let domains = req.body.domain;

    let str;
    if (Array.isArray(domains)) {
        str = "";
        for (i = 0; i < domains.length; i++) {
            str += domains[i] + ",";
        }
        console.log(str);
    } else {
        str = domains;
    }

    mysql.query(
        "insert into profile values(?,?,?,?,?,?,?)",
        [req.body.txtName, req.body.txtLastName, req.body.txtPhone, req.body.txtEmail, req.body.branch, str, req.body.skills],
        function (err) {
            if (err) {
                console.log(err.message);
                resp.status(500).send("Database error.");
            } else {
                console.log("Successful registration.");
                resp.redirect("form.html");
            }
        }
    );
});

app.get("/Admin-Dash", function (req, resp) {
    var path = __dirname + "/public/Admin-Dash.html";
    resp.sendFile(path);
})

app.get("/admin-users", function (req, resp) {
    var path = __dirname + "/public/admin-users.html";
    resp.sendFile(path);
})


app.get("/fetch-all",function(req,resp){
    
    mysql.query("select * from profile ",function(err,resultJsonAry){
        if(err!=null)
            {
                resp.send(err.message);
                return;

            }
       console.log(resultJsonAry);
       resp.send(resultJsonAry);
    })
})