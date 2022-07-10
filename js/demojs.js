var x;
x = 10;// number
x = "hello world";
x = true;

var y = 20;
y = y + 5;
y = y + "hello";//string -> 25hello
y = y + 10;// string -> 25heloo10
y = y + "t2204m";// string -> 25hello10t2204m
    console.log(y);

if(x == true){
    y = y + "hello";
}else{
    y = y + "xin chao";
}
for(var i=0;i<10;i++){
    console.log("i = " + i);
}

var arr=[];
arr[0] = 2;
arr[1] = "hello";
arr[2] = true;
arr[3] = [1,2,3,4];
arr[3][4] = ["hello","abc"];

var ary = [];
for(var i = 0;i<10;i++){
    ary[i] = 2*i + 1;
}
//muon them so 21 vao cuoi danh sach
//ary[10] = 21;
ary.push(21);
ary.push(23);
ary.push(25);
for (var i=0;i < ary.length;i++){
    console.log(ary[i]);
}
tinhtong(5,7)
function tinhtong(a,b){
    console.log(a + b);
    return a + b;
}

function checkPrime(n){
    if(n<2) return false;
    if(n==2 || n ==3) return true;
    for (var i = 2;i <= n/2;i++){
        if(n % i ==0) return false;
    }
    return true;
}

//mot so ham co san hay dung
alert("Phải người trên 18 tuổi mới có thể tham gia");
// var kq = confirm("Bạn chắc chắn muốn nộp bài?");//boolean
// console.log(kq);

// var str = prompt("Vui lòng nhập tên của bạn");// return string
// console.log(str);
// str = parseInt(str);
// console.log(str+10);
//18 -> 18
//18abc -> 18
//18abc2 -> 18
// abc18 -> Nan(not a number)

// for (var i=1;i<=5;i++){
//     var str = prompt("Vui lòng nhập tên của bạn " + i );
//     console.log(str);
// }

// // setTimeout(function (){
// //     alert("Demo Time out1");
// //     alert("Demo Time out2");
// // },5000);
// var t=1;
// var xyz = setInterval(function (){
//     console.log("t="+t);
//     t++;
//     if(t>5){
//         clearInterval(xyz);
//     }
// },1000)
//viet dong ho sô đếm ngược 10 phút
var p = 10;
var s =0;
// console.log(p + ":" + s);
var time = setInterval(function (){
    if(s==0){
        var min = p >=10?p:"0" + p;
        var sec = s >=10?s:"0" + s;
        console.log(min + ":" + sec);
    p--;
    s=59;
    }
    console.log(p + ":" + s);
    s--;
    if(p==0 && s ==0){
        clearInterval(time);
    }
},1000)











