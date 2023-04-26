const ulPag = document.querySelector('.pagination')
ulPag.addEventListener('click',updateActivePage)
function updateActivePage(event) {
     
    if (!event.target.classList.contains('pagination__item')) {
     return
    }
    const actBtn = ulPag.querySelector('.active')
    if (event.target.dataset.type === 'page') {
       
        actBtn.classList.remove('active')
        event.target.classList.add('active')
    }
    if (event.target.dataset.type === 'prev') {
        const resPrev = actBtn.dataset.page - 1
        const a = ulPag.querySelector(`[data-page="${resPrev}"]`)

        
        if (a) {
        actBtn.classList.remove('active')
        a.classList.add('active') 
        }
    }

      if (event.target.dataset.type === 'next') {
        const resPrev = Number(actBtn.dataset.page) + 1
        const a = ulPag.querySelector(`[data-page="${resPrev}"]`)
console.log(resPrev)
        
        if (a) {
        actBtn.classList.remove('active')
        a.classList.add('active') 
        }
    }
}
