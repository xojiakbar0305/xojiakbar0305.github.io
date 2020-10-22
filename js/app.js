let openToggler = document.querySelector('.open-toggler')
let siteList = document.querySelector('.site-list ')
let closeToggler = document.querySelector('.close-toggler')

openToggler.addEventListener('click', () => {
	siteList.classList.toggle('open--toggler')
	closeToggler.classList.add('open--toggler')
}) 


closeToggler.addEventListener('click',  () => {
	siteList.classList.toggle('open--toggler')
	closeToggler.classList.remove('open--toggler')
})