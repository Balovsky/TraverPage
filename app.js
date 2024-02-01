const videos = [
    {
        id: 1,
        title: 'Tokyo',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nam deleniti ea. Adipisci voluptate nobis consectetur? Aut delectus, quas dolorum laboriosam officia dolore quisquam obcaecati, neque cupiditate qui magnam distinctio!',
        src: './assets/videos/tokyo.mp4'
    },
    {
        id: 2,
        title: 'Egypt',
        desc: ' Ipsum, dolores unde! Nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed dolorem, sequi accusamus deserunt suscipit ratione quidem. A error maxime tenetur sequi totam quos dolor non, accusantium quo. Tempore, sint',
        src: './assets/videos/egypt.mp4'
    },
    {
        id: 3,
        title: 'Paris',
        desc: 'Tempore, sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus, provident minima velit doloremque ullam optio sint, odit animi pariatur excepturi temporibus iste laboriosam. Consectetur rem quidem impedit tempore deserunt?',
        src: './assets/videos/paris.mp4'
    },
    {
        id: 4,
        title: 'Maldives',
        desc: 'Consectetur rem quidem impedit tempore deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore, voluptas aliquid assumenda nemo praesentium cumque voluptatibus natus! Quaerat repudiandae debitis placeat consequuntur suscipit mollitia illum nemo officia dignissimos doloremque?',
        src: './assets/videos/maldives.mp4'
    },
]

const video = document.querySelector('.video')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const hamb = document.querySelector('.hamburger')
const list = document.querySelector('.nav__container')
const arrow = document.querySelector('.arrows')
const header = document.querySelector('.header')

let index = 0

window.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showVideo, 10000)
})

nextBtn.addEventListener('click', ()=>{
    // index++
    if(index>=videos.length){
        index = 0
    }
    showVideo()
})
prevBtn.addEventListener('click', ()=>{
    // index--
    if(index<0){
        index = videos.length-1
    }
    showVideo()
})

function showVideo(){
    index++
        if(index>=videos.length){
            index = 0
        }
        if(index<0){
            index = videos.length-1
        }
        
    video.src = videos[index].src
    title.innerHTML = videos[index].title
    desc.innerHTML = videos[index].desc
}
const socialBox = document.querySelectorAll('.social_anim')
const nav_anim = document.querySelectorAll('.nav_anim')
let tl1 = gsap.timeline({repeat: 0})

hamb.addEventListener('click', ()=>{
    hamb.classList.toggle('active')
    list.classList.toggle('close')
    tl1.to(socialBox, 0,{scale:0, opacity: 0})
    tl1.to(nav_anim, 0,{x:-900, scale: 0, opacity: 0})
    if(hamb.classList.contains('active')){
        arrow.classList.add('hidden')
        header.classList.add('bg__blur')
        tl1.to(nav_anim[0], 0.5,{x:0, scale: 1.1, opacity: 1}, '+=0.1')
        tl1.to(nav_anim[1], 0.5,{x:0, scale: 1.1, opacity: 1})
        tl1.to(nav_anim[2], 0.5,{x:0, scale: 1.1, opacity: 1})
        tl1.to(nav_anim[3], 0.5,{x:0, scale: 1.1, opacity: 1})

        tl1.fromTo(socialBox[1], 1.5,{scale: 0, opacity: 0}, {scale: 1.1, opacity: 1}, '-=1')
        tl1.fromTo([socialBox[2],socialBox[0]], 1.5,{scale: 0, opacity: 0}, {scale: 1.1, opacity: 1}, '-=1.3')
        // tl1.fromTo(, 1.5,{scale: 0, opacity: 0}, {scale: 1.1, opacity: 1}, '-=0.9')

    }else{
        arrow.classList.remove('hidden')
        header.classList.remove('bg__blur')
    }
})