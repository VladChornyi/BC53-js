 const body = document.querySelector('body')


const
    title = document.getElementById('title')


 const list = document.querySelector('.list')

//  const dataTopic = document.querySelectorAll('[data-topic]')
//  dataTopic.forEach((el)=> console.log(el)) 

//  const forEach = (callBack)=>{
//     const index = 0;
//     const element = "<div></div>";
//     const array = ["<div></div>","<div></div>","<div></div>"]
// callBack(element, index, array)
//  } 
 const dataTopicEl = document.querySelector('[data-topic]')
console.log(dataTopicEl)

const dataTopic = document.querySelectorAll('[data-topic]')
//console.log(dataTopic[dataTopic.length - 1])
const a = title.nextElementSibling
// console.log(a)
const subtitles = document.querySelectorAll('h3')
 subtitles.forEach((el)=> el.classList.add("active")) 
