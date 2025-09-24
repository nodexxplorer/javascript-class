// dom manipulation

// // accessing elements

// const salutation = document.getElementById('demo');
// console.log(salutation);

// const numbers = document.getElementById('demo2')
// // console.log(numbers);

// // changing the text of an element

// salutation.textContent = 'students no dey come class';

// numbers.textContent = 4;

// // changing the style of an element

// salutation.style.color = 'blue' ;
// salutation.style.backgroundColor = 'yellow';
// salutation.style.fontSize = '30px';
// salutation.style.fontWeight = 'bold';
 
// // changing attribute of an element

// const image = document.getElementById( 'myImg');
// // console.log(image);

// image.src = '../images/chibi girl.jpeg';
// image.src = 'a new image'



const text = document.getElementById('change');
const btn = document.getElementById('btn');
const image = document.querySelector('img');
const remove = document.getElementById('remove');

remove.addEventListener('click', function(){
    image.remove();
})

btn.addEventListener('click', function(){
    text.innerHTML = 'Magic happens here, just believe it';
    text.style.color = 'red';
    text.style.fontSize = '40px';
    text.style.fontWeight = 'bold';
    text.style.backgroundColor = 'yellow';
    text.style.display = 'flex';
    text.style.justifyContent = 'center';
    text.style.alignItems = 'center';
    text.style.height = '30 vh';
})

text.addEventListener('mouseover', function(){
    text.innerHTML = 'the text has changed';
    text.style.color = 'red';
    text.style.fontSize = '40px';
    text.style.fontWeight = 'bold';
})   

text.addEventListener('mouseout', function(){
    text.innerHTML = 'Magic happens here, just believe it';
    text.style.color = 'black';
    text.style.fontSize = '20px';
    text.style.fontWeight = 'normal';
})
btn.addEventListener('dblclick', function(){
    image.src = '../images/d3b970a2-228a-42c7-8c2b-c6f735ed63bd.jpeg';
    image.style.width = '300px';
    image.style.height = '400px';
})

const newImage = document.createElement('img');
newImage.src = '../images/c89bf782-437a-4867-94eb-0634f703329a.jpg';
newImage.style.width = '300px';
newImage.style.height = '400px';
document.body.appendChild(newImage);
