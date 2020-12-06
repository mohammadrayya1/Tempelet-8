//check local storeg

let colorBackgroundLanding=localStorage.getItem('backgroun-landing');
let backgroundlandfromstoreg=localStorage.getItem('backgroundstoreg');


if(colorBackgroundLanding)
{
  
    document.documentElement.style.setProperty('--min-color',colorBackgroundLanding);
}

var link=document.querySelectorAll('.link li a');



link.forEach(function(items)
{

items.onclick=function()
{


    for(var i=0;i<link.length;i++)
    {
        var x=i;
      link[x].classList.remove('active');
    }
    items.classList.add('active');

    let bul=items.dataset.name;
  
    let bultclass=document.querySelector(`.${bul}`);
   
    let bulto=bultclass.offsetTop;

  
   
window.scrollTo({ top: bulto, behavior: 'smooth' });

};

});





let box=document.querySelector('.setting-box');
let grea=document.querySelector('.g1');

let fa=document.querySelector('.fa-gear');

fa.addEventListener('click',()=>
{
fa.classList.toggle('fa-spin');
});



grea.addEventListener('click',()=>
{
    
    box.classList.toggle('open');
    

});


let itemscolor=document.querySelectorAll('.setting-container .colors li');
let sp=document.querySelector('.sp1');



itemscolor.forEach(function(items)
{


    items.onclick=function()
    {
       document.documentElement.style.setProperty('--min-color',items.dataset.color);
       localStorage.setItem('backgroun-landing',items.dataset.color);

      

    }
})
;


//select landing page Element
let LandingPage=document.querySelector('.landign-page');
LandingPage.style.backgroundImage=backgroundlandfromstoreg;

//Array for My Foto
let images=["B1.png","B2.jpg","B3.jpg","B4.jpg","B5.jpg"];
//backgrouud repeat

//btn backgroun random

let btnYes=document.querySelector('.btn-background-yes');
let btnNo=document.querySelector('.btn-background-no');


function runbackground()
{
    let RandomNumber=Math.floor(Math.random()* images.length);
    LandingPage.style.backgroundImage=`url('images/${images[RandomNumber]}')`;
    localStorage.setItem('backgroundstoreg',LandingPage.style.backgroundImage);

}

var checkBackground=false;
var verglich=localStorage.getItem('btnsave');
checkBackground=verglich;
var refreshInterval;


function check(checkBackground)
{
if(checkBackground==true)
{

  refreshInterval =setInterval(runbackground,100);

}
else
{

clearInterval(refreshInterval);

}
}


console.log(checkBackground);

if(checkBackground=='true')
{
    btnYes.classList.add('close');
    btnNo.classList.remove('close');
    check(true);
   
}
else
{
    btnYes.classList.remove('close');
    btnNo.classList.add('close');
    check(checkBackground); 
}



btnYes.addEventListener('click',()=>
{

    btnYes.classList.add('close');
    btnNo.classList.remove('close');
    checkBackground=true;
    localStorage.setItem ('btnsave',checkBackground);
    check(checkBackground);
    
  
});

/*
 localStorage.setItem ('btnsave',checkBackground);
 localStorage.setItem ('btnsave',checkBackground);

*/
btnNo.addEventListener('click',()=>
{
    btnYes.classList.remove('close');
    btnNo.classList.add('close');
    checkBackground=false;
    localStorage.setItem ('btnsave',checkBackground);
    check(checkBackground);
   

});



/*  our skills */



let ourskills=document.querySelectorAll('.our-skill .skill-Info .s1 .skill-procecce .s2');
let our=document.querySelector('.our-skill');
var y=our.offsetTop;
console.log(y);

window.onscroll=()=>
{
    console.log(pageYOffset);



if(pageYOffset>y)
{
    ourskills.forEach((item)=>
    {
         item.style.width=item.dataset.value;
    });
  

}
else if(pageYOffset<our.offsetTop)
{
    ourskills.forEach((item)=>
    {
         item.style.width="0%";
    });
}

}


/*===============Gallary============*/


let imagesAll=document.querySelectorAll('.gallary .imag-box img');




imagesAll.forEach((e)=>
{

e.addEventListener('click',()=>
{

 
let overlay=document.createElement('div');

overlay.className="popup-overlay";

document.body.appendChild(overlay);



let popupBox=document.createElement('div');
popupBox.className="popup-box";




let close=document.createElement('i');
close.className="fa fa-times itemClose";
close.setAttribute('aria-hidden','true');


let title=document.createElement('p');
title.className="title1";
popupBox.appendChild(title);

title.innerHTML=e.dataset.name;

popupImage=document.createElement('img');

popupBox.appendChild(popupImage);
popupBox.appendChild(close);


popupImage.src=e.src;

document.body.appendChild(popupBox);


close.addEventListener('click',()=>
{
document.body.removeChild(overlay);
document.body.removeChild(popupBox);
});

});





});

let bult=document.querySelectorAll('.nav--bulits .bullet');
bult.forEach((items)=>
{
    items.addEventListener('click',()=>
{

    let bul=items.dataset.name;
    let bultclass=document.querySelector(`.${bul}`);
   
    let bulto=bultclass.offsetTop;

  
   
window.scrollTo({ top: bulto, behavior: 'smooth' });

});
    
})

let btnBultYes=document.querySelector('.TestOPtion .btn-TestOPtion-yes');
let btnBultNo=document.querySelector('.TestOPtion .btn-TestOPtion-no');
let NavBult=document.querySelector('.nav--bulits');
let bultstatus="true";



let localbultstatus=localStorage.getItem('showBUlt');


function show1()
{
    btnBultYes.classList.add('close');
    btnBultNo.classList.remove('close');
    NavBult.classList.add('show');  
}

function hidden()
{
    btnBultNo.classList.add('close');
    btnBultYes.classList.remove('close');
    NavBult.classList.remove('show'); 
}


if(localbultstatus== bultstatus)
{
    show1(); 
}
else
{
   

   hidden(); 
}


btnBultYes.addEventListener('click',()=>
{
show1();

bultstatus="true";
localStorage.setItem('showBUlt',bultstatus);

});

btnBultNo.addEventListener('click',()=>
{
hidden();
bultstatus="false"; 
localStorage.setItem('showBUlt',bultstatus);

});

let reset=document.querySelector('.reset-btn');



reset.addEventListener('click',()=>
{

localStorage.removeItem('showBUlt');
localStorage.removeItem('backgroun-landing');
localStorage.removeItem('backgroundstoreg');
window.location.reload();

});

window.addEventListener('keydown',()=>
{
console.log("kkokokokok");

});


let btnmenue=document.querySelector('.menue');
let linkmenue=document.querySelector('.header-area .show1');

btnmenue.addEventListener('click',()=>
{
linkmenue.classList.toggle('show1');
btnmenue.classList.toggle('ros');
});






