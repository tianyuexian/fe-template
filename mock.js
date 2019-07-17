var http = require('http');
var mockserver = require('mockserver');
console.log(mockserver)

 
http.createServer(mockserver('/Users/dengatsusen/Documents/test/mocks')).listen(9001);