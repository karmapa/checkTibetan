var fs=require("fs");
var roots=JSON.parse(fs.readFileSync("./roots.json","utf8"));

var vowels=["","ི","ུ","ེ","ོ"];
var suffixes=["ག", "ང", "ད", "ན", "བ", "མ", "ར", "ལ", "ས" ];
var sa2ndSuffixes=["གས", "ངས", "བས", "མས"];
var da2ndSuffixes=["ནད", "རད", "ལད"];
var allVS=vowels.concat(suffixes).concat(sa2ndSuffixes).concat(da2ndSuffixes);

var getRootsWithVowels1D = function(){
	var rootsWithVowels1D=[];
	roots.map(function(items){
		items.map(function(item){
			for(var j=0; j<vowels.length; j++){
				rootsWithVowels1D.push(item+vowels[j]);
			}
		});
	});
	return rootsWithVowels1D;
}
var rootsWithVowels1D=getRootsWithVowels1D(roots);

var getRootsWithVowelsWithSuffixes1D = function(){
	var rootsWithVowelsWithSuffixes1D=[];
	rootsWithVowels1D.map(function(item){
		for(var m=0; m<suffixes.length; m++){
			rootsWithVowelsWithSuffixes1D.push(item+suffixes[m]);
		}
	});
	return rootsWithVowelsWithSuffixes1D;
}
var rootsWithVowelsWithSuffixes1D=getRootsWithVowelsWithSuffixes1D();

var getRootsWithSa2ndSuffixes1D = function(){
	var out=[];
	rootsWithVowels1D.map(function(item){
		for(var i=0; i<sa2ndSuffixes.length; i++){
			out.push(item+sa2ndSuffixes[i]);
		}
	});
	return out;
}
var rootsWithSa2ndSuffixes1D=getRootsWithSa2ndSuffixes1D();

var getRootsWithDa2ndSuffixes1D = function(){
	var out=[];
	rootsWithVowels1D.map(function(item){
		for(var i=0; i<da2ndSuffixes.length; i++){
			out.push(item+da2ndSuffixes[i]);
		}
	});
	return out;
}
var rootsWithDa2ndSuffixes1D=getRootsWithDa2ndSuffixes1D();

var possibleRootLetters=rootsWithVowels1D.concat(rootsWithVowelsWithSuffixes1D).concat(rootsWithSa2ndSuffixes1D).concat(rootsWithDa2ndSuffixes1D);

fs.writeFileSync("possible_root_letters.json",JSON.stringify(possibleRootLetters,""," "),"utf8");
var c=0;
roots.map(function(item){c += item.length});
console.log(c);