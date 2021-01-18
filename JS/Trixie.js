var x = document.getElementById("showmenu");
var y = document.getElementById("off");
var slider = document.getElementsByClassName("slide-image");
x.addEventListener("click", Click);
y.addEventListener("click", ()=>{document.getElementById("on").style.display = 'none'});

// tạo sự kiện nhấn nút chuột vào button

// var ClickNext = document.getElementsByClassName("next");
// var ClickPrev = document.getElementsByClassName("prev");

//     ClickNext.addEventListener('click', nextAndPrev());
//     ClickPrev.addEventListener('click', nextAndPrev())


var i;
var index = 1;
ShowSlider(index);



function nextAndPrev(n){
    ShowSlider(index+=n);
}
function ShowSlider(n){
    var dot = document.getElementsByClassName("one");
    for(i=0; i<dot.length; i++){
        dot[i].style.color ='black';
    }
    for(i=0; i<slider.length;i++){
        slider[i].style.display = 'none';
    }
    if(n > slider.length){
        index = 1;
    }
     if(n < 1){
        index = slider.length;
    }
   
    slider[index - 1].style.display = 'block';
    dot[index - 1].style.color = 'red';
}
function chay(){
    nextAndPrev(1);
        // console.log("bùi khắc tảo");
    }
var c = setInterval(()=>{
    chay();
}, 3000);

function Click(){
    document.getElementById("on").style.display = 'block';
}
