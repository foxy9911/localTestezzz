// const container = document.querySelector("#container");
//
// const content = document.createElement('div');
// content.classList.add("content");
// content.textContent = "This is a glorios shit!";
//
// container.appendChild(content);


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

//Paragraf
const paragraph = document.createElement("p");
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I am red!"
paragraph.style.color = 'red'

container.appendChild(paragraph);

//Header
const header = document.createElement("h3");
header.textContent = 'I am orange h3!';
header.style.color = 'orange';
container.appendChild(header);

//Another div
const allPage = document.querySelector("body");
const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.borderStyle = 'solid'
newDiv.style.borderColor = 'black'
newDiv.classList.add('secondDiv')
allPage.insertBefore(newDiv, container);

const newHeader = document.createElement("h1");
newHeader.textContent = "I'm in a div";
newDiv.appendChild(newHeader);

const newParagraph = document.createElement("p");
newParagraph.textContent = 'Me too!';

newDiv.appendChild(newParagraph);

// Events
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello motherfuckers!");
btn.onclick = function(){
    alert("Hello motherfuckers");
}

const btnV2 = document.querySelector("#bestBtn");
// btnV2.addEventListener("click", () => {
//     alert("Hello suckkkkkers!!!!");
// })

btnV2.addEventListener("click", function (e) {
    console.log(e);
});
//
// btnV2.addEventListener("click", function (e) {
//     console.log(e.target);
// });

