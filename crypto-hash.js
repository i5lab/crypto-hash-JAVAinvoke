// const edge = require("edge-js");
const sha256 = require("fast-sha256");

var java = require("java");
var jarfile = "BlockChain\\BlockChain.jar";
java.classpath.push(jarfile);

const cryptoHash = (...inputs) => {
  var str_in = inputs.sort().join(" ");
  return java.callStaticMethodSync("Simple", "SHA256", str_in);
  //return ;
};

//console.log(cryptoHash("crccrecerf"));

module.exports = cryptoHash;

//for test!