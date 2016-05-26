if (Window) {
Window.prototype.google = {
  ac: {
    h: function(hmm) {
      console.log(hmm);
    }
  }
}
}

else {
  window = {
    prototype: function(parent) {
      return parent;
    },
    google: {
      ac: {
        h: function(hmm) {
        console.log(hmm);
        return hmm;
      }
    }
  }
}
  var Window = window;
}

console.log(Window.prototype);

var something = window.google.ac.h(["Query",[["query",0],["query in access 2013",0],["query optimization",0],["querying microsoft sql server 2012",0],["query processing and optimization",0],["query in access 2010",0],["query in access 2007",0],["query design access 2013",0],["query letter",0],["query optimization in sql server 2012",0]],{"k":1,"l":"1","q":"FYPjxJD1x7ZkJUhu21dFmdEZaxY"}]);

var ex = "window.google.ac.h(" +
"['Query'," +
  "[" +
    "['query',0]," +
    "['query in access 2013',0]," +
    "['query optimization',0]," +
    "['querying microsoft sql server 2012',0]," +
    "['query processing and optimization',0]," +
    "['query in access 2010',0]," +
    "['query in access 2007',0],"+
    "['query design access 2013',0]," +
    "['query letter',0]," +
    "['query optimization in sql server 2012',0]" +
  "]," +
  "{'k':1,'l':1,'q':'FYPjxJD1x7ZkJUhu21dFmdEZaxY'}])";

var matcher = /\[(.*)\]/;

console.log(matcher.exec(ex));
console.log(ex.match(matcher));

var tested = ex.match(matcher);

console.log('tested variable');
console.log(tested);

tested2 = tested.toString();

var newArr = tested2.split(",");

tested3 = JSON.stringify(newArr);
tested3 = JSON.parse(tested3);

console.log('---------------');
console.log(newArr);

console.log('TEST 2\n');

console.log(tested2);

console.log('newArr array 1' + newArr[1]);
console.log('tested array 1' + tested2[1]);

console.log(tested3);
console.log('tested3 array 1'+ tested3[0]);

console.log('something is...');

console.log(something);

for (var some in something[1]) {
    console.log(something[1][some][0]);
  }
console.log(something[1]);