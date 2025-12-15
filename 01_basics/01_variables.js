const accountId = 834710
let accountEmail = "dax@gmail.com"
var accountpassword = "87878"
accountCity = "patan"

console.log(accountEmail);

// accountId = 2 // not allowed

accountEmail = "joshi8347@gmail.com"
accountpassword = "8585"
accountCity = "sidhpur"


/* 
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountpassword, accountCity])