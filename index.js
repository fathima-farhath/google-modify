function background1(){
    document.querySelector('.total').style.background="url('lonely.jpg') center center / cover ";
    document.querySelector('#qot').style.color="white";
   
    document.querySelector('#qot').innerHTML=" Never Regret anything that made you smile....";
}
function background2(){
    document.querySelector('.total').style.background="url('dl.jpg') center center / cover ";
    document.querySelector('#qot').style.color="black";
    document.querySelector('#qot').innerHTML="Exploration is the curiosity that is put into action...";
}
function background3(){
    document.querySelector('.total').style.background="url('bll.jpg') center center / cover ";
    document.querySelector('#qot').style.color="brown";
    document.querySelector('#qot').innerHTML="Beleive in yourself and anything is possible....";
}
function background4(){
    document.querySelector('.total').style.background="url('im.jpg') center center / cover ";
    document.querySelector('#qot').style.color="black";
document.querySelector('#qot').innerHTML="Every great things have small beginings....";
}



//clock working
var interval= setInterval(clock,1000);
function clock(){

var hours=document.getElementById('hours');
var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');

var h=new Date().getHours();
var m=new Date().getMinutes();
var s=new Date().getSeconds();

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

}
