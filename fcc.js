function reverseStr(str){
  var a = str.split("");
  console.log(a);
  var re = a.reverse();
  console.log(re);
  var concat= re.join("");
  console.log(concat);
}

reverseStr("hello");
