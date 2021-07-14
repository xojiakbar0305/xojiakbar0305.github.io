let elDataTemplate = document.querySelector('#cardTemplate').content;
let templateBox = document.querySelector('.template-box');


let dataTemplate = (data) => {
    let newTemplate = elDataTemplate.cloneNode(true);
    newTemplate.querySelector('.template-link').href = data.url;
    newTemplate.querySelector('.template-img').src = data.imgUrl;

    templateBox.appendChild(newTemplate);
}

datas.forEach(data => {
    dataTemplate(data);
});