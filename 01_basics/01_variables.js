const accountId = 898989
let accountEmail = "joshidax@gmil.com"
var accountPassword = "12345"
accountCity = "patan"
let accountState;

// accountId = 2 // not allowed


accountEmail = "dj545@gmail.com"
accountPassword = "21212121"
accountCity = "sidhpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])