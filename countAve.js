var fs=require("fs");
var glob=require("glob");

var total = 0;
var processFile = function(fn){
	var file=JSON.parse(fs.readFileSync(fn,"utf8"));
	total += file.length;
}


glob("./result/*.txt",function(err,files){
  files.map(processFile);
  console.log(total / files.length);
});