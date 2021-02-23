//Declaring the function as an anonmymous
module.exports.getDate = function(){
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options); 
}

//This can also be used! exports.{..}
exports.getDay = function(){
  let today = new Date();
  let options = {
    weekday: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
}

console.log(module.exports);
