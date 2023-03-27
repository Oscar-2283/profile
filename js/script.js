    //   typing Animation
    var typed = new Typed('.typing', {
        strings: ['', 'Web Developer'],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
        });
        let face = document.querySelector('.face')
//  Aside

const nav = document.querySelector('.nav'),
    navList =nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i =0 ; i<totalNavList;i++){
        const a = navList[i].querySelector('a');
        a.addEventListener('click',function(){
            removeBackSection();
            for(let j =0 ;j<totalNavList;j++){
                if(navList[j].querySelector('a').classList.contains('active')){
                    addBackSection(j)
                }
                navList[j].querySelector('a').classList.remove('active')
            }
            this.classList.add('active')
            showSection(this)
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn()
                document.querySelector('.face').classList.toggle('open')
            }
        })
    }
function addBackSection(num){
    allSection[num].classList.add('back-section')
}
function removeBackSection(){
    for(let i =0; i<totalSection;i++){
        allSection[i].classList.remove('back-section')
    }
}
function showSection(element){
    const target =(element.getAttribute('href').split('#')[1]);
    for(let i =0; i<totalSection;i++){
        allSection[i].classList.remove('active')
    }
    document.querySelector('#' + target).classList.add('active')
    if(target =='portfolio'){
        face.classList.add('op')
        setTimeout(()=>{
            face.classList.remove('op');
        },1200);
    }

}

function updateNav(element){
    for(let i =0; i<totalNavList;i++){
        navList[i].querySelector('a').classList.remove('active')
        const target =(element.getAttribute('href').split('#')[1]);
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1])
        navList[i].querySelector('a').classList.add('active')
    }
}



const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');
      navTogglerBtn.addEventListener('click', ()=>{
        asideSectionTogglerBtn();
        document.querySelector('.face').classList.toggle('open')
      })

      function asideSectionTogglerBtn(){
        aside.classList.toggle('open')
        navTogglerBtn.classList.toggle('open')
        for (let i=0; i<totalSection;i++){
            allSection[i].classList.toggle('open')
        }
      }

// form



// var form = document.getElementById('sheetdb-form');
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//       method : "POST",
//       body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
    
//     response => response.json()
//   ).then((html) => {
    
     
//     Swal.fire('Thank you for your message.')
//     form.reset()
    
//   });
// });


//eye
document.querySelector('body').addEventListener('mousemove',eyeball);
function eyeball() {
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })
}

let clickIt = document.querySelectorAll('.portfolio-item-inner')
let clickSvg = document.querySelector('.face svg')

clickIt.forEach(e =>{
    e.addEventListener('mouseenter',()=>{
        clickSvg.classList.toggle('shakesvg')
        face.classList.toggle('active')
        clickSvg.style.opacity = '1'

    })
    e.addEventListener('mouseleave',()=>{
        face.classList.toggle('active')
        clickSvg.classList.toggle('shakesvg')
        clickSvg.style.opacity = '0'

    })
})