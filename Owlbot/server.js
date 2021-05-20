var Owlbot = require('owlbot-js');
var YOUR_TOKEN  = '32e5661eeb1f701ebebda85fd765321206762b7c';  
var client = Owlbot(YOUR_TOKEN);
 
client.define('dog')
.then(function(result){
   console.log(result);
});