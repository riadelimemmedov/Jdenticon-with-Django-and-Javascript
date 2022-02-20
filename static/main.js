//!This Is Root Js 

console.log('Hello World')

let ipicons = [...document.getElementsByClassName('jdenticon')]
const modalIdencIcon = document.getElementById('model-jtenticon')

ipicons.forEach((ipicon)=>{
    ipicon.addEventListener('click',(e)=>{
        e.preventDefault()
        const el = ipicon.cloneNode(true)
        el.setAttribute('width','100%')
        el.setAttribute('height','100%')

        modalIdencIcon.innerHTML = ''
        modalIdencIcon.appendChild(el)
    })
})
    