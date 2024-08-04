const bakgrond = document.querySelector(".welcome")

document.addEventListener("mousemove", function(e) {

    let aye = document.getElementById("aye");
    const pussy = document.querySelector('.pulse')
    let OffLeftAye = e.x - pussy.offsetLeft - aye.offsetLeft - (aye.offsetWidth/2)  ;
    let OffTopAye = e.y - pussy.offsetTop - aye.offsetTop    - (aye.offsetHeight/2)  ;

    aye.style.transform = `translate(${OffLeftAye/10}px, ${OffTopAye/10}px ) `;

    let ayeball = document.getElementById("ayeball");

    let OffLeftAyeB = e.x - pussy.offsetLeft - aye.offsetLeft  - ayeball.offsetLeft - (ayeball.offsetWidth/2)  ;
    let OffTopAyeB = e.y - pussy.offsetTop- aye.offsetTop    - ayeball.offsetTop - (ayeball.offsetHeight/2)  ;

    ayeball.style.transform = `translate(${OffLeftAyeB/6}px, ${OffTopAyeB/6}px ) `;



// console.log(e);
});

// bakgrond.addEventListener("mousemove", function(e) {

//     let aye = document.getElementById("aye");
//     aye.style.left = (e.offsetX / 2 ) + 'px';
//     aye.style.top = (e.offsetY / 2 ) + 'px';

//     let ayeball = document.getElementById("ayeball");


//     ayeball.style.left = (e.offsetX / 2 ) + 'px' ;
//     ayeball.style.top = (e.offsetY / 2 )  + 'px' ;


// });


