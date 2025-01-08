let navItems = document.querySelector('nav ul')


function hideMenuOfNav(){
    navItems.classList.toggle('show')
}

let lineVisible = document.querySelector('.section-4 .first h3 span')


setInterval(() => {
    if(lineVisible.style.visibility == 'hidden'){
        lineVisible.style.visibility = 'visible'
    }else{
        lineVisible.style.visibility = 'hidden'
    }
},1000)


let productDetail = document.querySelector('.detailBox')

let iconPic = document.querySelector('.iconPic')
let title =  document.querySelector('.title')
let SkillName = document.querySelector('.skillName')
let desc = document.querySelector('.desc')

function productShowOrNot(e , id){
    
    let obj = cardsData.find( (obj) => obj.id === id)
    
    iconPic.src = obj.imgSrc
    title.innerHTML = obj.title

    SkillName.innerHTML = obj.skillName
    desc.innerHTML = obj.description

    productDetail.classList.toggle('visiblite')
}

let secondDiv = document.querySelector('.second')

const heading = document.querySelector('#h2');
heading.innerHTML = 'Learning <span>skills</span>';
heading.className = 'h2'


const cardsData = [
    {
      id : 1,
      imgSrc: './pic/Reactjs.jpg',
      title : 'Reactjs JavaScript Library',
      skillName : 'Reactjs',
      description:
       "React.js is a JavaScript library for creating interactive user interfaces. It is maintained by Facebook along with a community of individual developers and companies. React uses single-page application (SPA) technology and introduces the concept of 'write once, use multiple times.' It handles routing on the client side, making websites faster and more responsive. With React, websites can update content dynamically without refreshing the entire page.",
    },
    {
      imgSrc: './pic1.jpg',
      title : 'Nest JavaScript Library for backend',
      skillName :'Nest js',
      description:
        "Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and combines the best features of Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). Nest.js leverages powerful frameworks like Express.js or Fastify under the hood, providing a robust architecture for building modern, maintainable back-end applications. Its modular structure, dependency injection, and built-in support for features like middleware, authentication, and database integration make it a popular choice for creating RESTful APIs and microservices.",
    },
    {
      imgSrc: './pic1.jpg',
      title : 'Next JavaScript Library for full stack',
      skillName :'Next js',
      description:
       "Next.js is a React-based framework built on top of the React library, designed to enhance the development of modern web applications. It significantly improves SEO capabilities compared to React.js, offering features like server-side rendering (SSR) and static site generation (SSG), which optimize search engine visibility. Next.js extends beyond the client side, enabling server-side development, making it a versatile choice for both front-end and back-end applications. Additionally, it seamlessly integrates into the MERN stack, providing a comprehensive solution for full-stack development without requiring additional learning.",
    },
  ];

  let projDiv = document.getElementById('proj')
  projDiv.className = 'proj';


  cardsData.forEach((cardData) => {

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
  
    const img = document.createElement('img');
    img.src = cardData.imgSrc;
    img.alt = '';
  
    // const paragraph = document.querySelector('p');
    // paragraph.hidden = true;
    // paragraph.innerHTML = cardData.id 


    const h3 = document.createElement('h3');
    h3.textContent = cardData.title;
    // h3.className = 'title'
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(h3);

    // cardDiv.addEventListener('click', productShowOrNot);
    // cardDiv.onclick = productShowOrNot(cardData.id)
    cardDiv.onclick = function (e) {
        productShowOrNot(e, cardData.id);
    };

    projDiv.appendChild(cardDiv);
  });


let myPro = document.querySelector('.proj');
myPro.className = 'proj'


const imagesData = [
  { id : 1 , title: 'Keangnam Grand Hall', year: '2018' },
  { id : 2 , title: 'Keangnam Grand Hall', year: '2018' },
  { id : 3 , title: 'Keangnam Grand Hall', year: '2018' },
  { id : 4 , title: 'Keangnam Grand Hall', year: '2018' },
];

imagesData.forEach((imageData) => {

  const imagesDiv = document.createElement('div');
  imagesDiv.className = 'Images Image1';

  imagesDiv.onclick = function () {
    videoShowOrNot(imageData.id , imagesDiv);
    };

  const shadowDiv = document.createElement('div');
  shadowDiv.className = 'Shadow';

 
  const h3 = document.createElement('h3');
  h3.textContent = imageData.title;

  
  const p = document.createElement('p');
  p.textContent = imageData.year;


  shadowDiv.appendChild(h3);
  shadowDiv.appendChild(p);

  imagesDiv.appendChild(shadowDiv);

  myPro.appendChild(imagesDiv);

});

let detailBox1 = document.querySelector('.detailBox1')
detailBox1.className = 'detailBox1'

 function videoShowOrNot(id ){
    // console.log(id ,'this is id for video component')

    let obj = imagesData.find( (obj) => obj.id === id)

    detailBox1.classList.toggle('visiblite1')
 }