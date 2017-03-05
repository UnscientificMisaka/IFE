// var page = require('webpage').create();
// page.open("http://www.baidu.com",function(status){
//   console.log("Status:"+status);
//   if(status == "success"){
//     page.render("example.png");
//   }
//   phantom.exit();
// });


// var page = require('webpage').create(),
//  	system = require('system'),
//  	t,address;

//  if(system.args.length === 1){
//  	console.log("xxxxx");
//  	phantom.exit();
//  }

//  t = Date.now();
//  address = system.args[1];
//  page.open(address,function(status){
//  	if(status !== "success"){
//  		console.log("fail to load the address");
//  	}else{
//  		t = Date.now() - t;
//  		console.log("loading" + system.args[1]);
//  		console.log("loading time " + t + 'mesc')
//  	}
//  	phantom.exit();
//  });

// var page = require('webpage').create();
// page.onConsoleMessage = function(msg) {
//   console.log('Page title is ' + msg);
// };
// var url = "http:\\www.baidu.com"
// page.open(url, function(status) {
//   page.evaluate(function() {
//     console.log(document.title);
//   });
//   phantom.exit();
// });

// var page = require('webpage').create();
// page.onResourceRequested = function(request) {
//   console.log('Request ' + JSON.stringify(request, undefined, 4));
// };
// page.onResourceReceived = function(response) {
//   console.log('Receive ' + JSON.stringify(response, undefined, 4));
// };
// page.open(url);


// var system = require('system');
// var args = system.args;

// if (args.length === 1) {
//   console.log('Try to pass some arguments when invoking this script!');
// } else {
//   args.forEach(function(arg, i) {
//     console.log(i + ': ' + arg);
//   });
// }

var page = require('webpage').create();
var jQuery = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js";
var url = "htp://baidu.com";
page.onConsoleMessage = function(msg){
	console.log(msg);
}


var system = require('system');
var args = system.args;
var kw = args[1];



page.includeJs(jQuery,function(){
	page.open(url,function(status){
		page.evaluate(function(){
			$("#kw").val("test");
			$("#su").trigger("click");
			console.log(document.title);

		});
		phantom.exit();
	});
	
});

