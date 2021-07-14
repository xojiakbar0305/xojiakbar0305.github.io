let elDataTemplate = document.querySelector('#cardTemplate').content;
const templateBox = document.querySelector('.template-box');
const loading = document.querySelector('.loading');

getPost();
getPost();
getPost();

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	console.log( { scrollTop, scrollHeight, clientHeight });
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
		// show the loading animation
		showLoading();
	}
});

function showLoading() {
	loading.classList.add('show');
	
	// load more data
	setTimeout(getPost, 1000)
}

function getPost() {

	loading.classList.remove('show');
}

datas.forEach(data => {
	addDataToDOM(data);
});

function addDataToDOM(data) {
	
	let newTemplate = elDataTemplate.cloneNode(true);
	newTemplate.querySelector('.template-link').href = data.url;
	newTemplate.querySelector('.template-img').src = data.imgUrl;
	
	templateBox.appendChild(newTemplate);
	
}