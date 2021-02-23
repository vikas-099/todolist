const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
const items = ["Buy Food", "Cook Food", "Eat Food"]; //We can actually add items in const array but we cant equal it to a new one!
const workItems = [];

console.log(date.getDate());
console.log(date.getDay());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
})

app.post("/", function(req, res) {
  const item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
})


app.listen(3000, function() {
  console.log("Server is up and running on port 3000");
})
