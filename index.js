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
console.log(productDetail)

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

function closeDetail(){
  productDetail.classList.toggle('visiblite')
}

let secondDiv = document.querySelector('.second')

const heading = document.querySelector('#h2');
heading.innerHTML = 'My <span>skills</span>';
heading.className = 'h2'


const cardsData = [
    {
      id : 1,
      imgSrc: './pic/html.png',
      title : 'HyperText Markup Language',
      skillName : 'HTML',
      description:
      `HTML (HyperText Markup Language) is the core language used for creating and structuring content on the web. It forms the backbone of every website, providing the essential framework that defines the layout and organization of web pages. HTML uses elements, which are represented by tags, to encapsulate different types of content such as text, images, links, forms, and multimedia. These elements are further customized with attributes to define additional properties, such as styles, links, and user interactions.      
      <br> HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to build interactive and visually appealing websites. While HTML provides the structure, CSS is responsible for styling the content, and JavaScript adds dynamic functionality. One of the key features of HTML is its flexibility, allowing developers to create anything from simple static pages to complex web applications.       
      <br> HTML5, the latest version of the language, introduced several new semantic tags, multimedia capabilities, and APIs to enhance the web development experience. It supports video and audio elements, canvas for graphics, and improved form controls, making it a powerful tool for modern web development. Due to its simplicity, universality, and compatibility across all browsers, HTML remains the foundation for building and structuring the vast majority of websites and web applications`,
    },
    {
      id : 2,
      imgSrc: './pic/CSS-Logo.png',
      title : 'Cascading Style Sheets',
      skillName : 'CSS',
      description:
       "CSS (Cascading Style Sheets) is a language used to describe the presentation and layout of HTML elements on a web page. While HTML provides the structure of a webpage, CSS controls its visual appearance. CSS allows you to style elements by specifying properties like colors, fonts, margins, padding, and positioning. It enables web developers to separate content from design, making websites more flexible and easier to maintain. Using selectors, you can target specific elements and apply styles such as text alignment, background colors, and responsive layouts. CSS also supports advanced techniques like animations and transitions, enhancing the interactivity and user experience of a website. Additionally, CSS is used to ensure that a site looks good on all devices by utilizing media queries for responsive design",
    },
    {
      id : 3,
      imgSrc: './pic/javaScript.jpg',
      title : 'JavaScript',
      skillName : 'Javascript',
      description:
       "JavaScript is a powerful, high-level programming language that is primarily used to create interactive and dynamic content on the web. As one of the core technologies of web development (alongside HTML and CSS), JavaScript allows developers to implement complex features such as form validation, interactive maps, animations, and real-time updates without reloading the web page. It runs in the browser, which means it can be executed directly on the client side, making web pages more responsive and engaging. JavaScript is an event-driven, imperative, and functional language that supports object-oriented programming concepts. It can manipulate HTML and CSS elements using the Document Object Model (DOM) to change the content and style of a webpage dynamically. With the rise of Node.js, JavaScript is now also widely used for backend development, allowing developers to use the same language for both frontend and backend applications. Its versatility and rich ecosystem of libraries and frameworks, such as React, Angular, and Vue, have made JavaScript an essential skill for modern web development",
    },
    {
      id : 4,
      imgSrc: './pic/React.png',
      title : 'Reactjs JavaScript Library',
      skillName : 'Reactjs',
      description:
       "React.js is a JavaScript library for creating interactive user interfaces. It is maintained by Facebook along with a community of individual developers and companies. React uses single-page application (SPA) technology and introduces the concept of 'write once, use multiple times.' It handles routing on the client side, making websites faster and more responsive. With React, websites can update content dynamically without refreshing the entire page.",
    },
    {
      id : 5,
      imgSrc: './pic/Bootstrap.jpeg',
      title : 'Booststrap CSS Framework',
      skillName : 'Bootstrap',
      description:
       "Bootstrap is a popular, open-source front-end framework designed to simplify the development of responsive and mobile-first websites. It provides a set of pre-designed HTML, CSS, and JavaScript components, such as buttons, forms, navigation bars, grids, and modals, which are easy to implement and customize. By using Bootstrap, developers can quickly create aesthetically pleasing and functional websites without needing to write complex CSS from scratch. One of its key features is the responsive grid system, which automatically adjusts content to fit different screen sizes, making it ideal for building mobile-friendly websites. Bootstrap also includes a collection of utility classes that help with layout control, spacing, text alignment, and other styling properties. With its extensive documentation and community support, Bootstrap has become a go-to tool for web developers looking to speed up their workflow and ensure a consistent, professional look across websites",
    },
    {
      id : 5,
      imgSrc: './pic/Tailwind.png',
      title : 'Tailwind CSS Framework',
      skillName : 'Tailwind',
      description:
       "Tailwind CSS is a utility-first CSS framework that provides a highly customizable set of low-level utility classes to help developers create modern and responsive web designs. Unlike traditional CSS frameworks like Bootstrap, which offer pre-built components, Tailwind focuses on giving you the building blocks to create custom designs directly in your HTML. Instead of writing custom CSS for every element, you use utility classes such as text-center, bg-blue-500, or px-4 to apply styles directly in the markup. This approach allows for greater flexibility and faster development, as it eliminates the need for writing custom CSS rules or dealing with complex class names. Tailwind also supports responsive design out of the box, making it easy to create layouts that adapt to different screen sizes using responsive utility classes. Additionally, Tailwind's configuration file allows you to extend and modify the default design system, including colors, spacing, typography, and more, making it a great choice for developers who want fine-grained control over their designs without writing a lot of custom code.",
    },
    // {
    //   imgSrc: './pic1.jpg',
    //   title : 'Nest JavaScript Library for backend',
    //   skillName :'Nest js',
    //   description:
    //     "Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and combines the best features of Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). Nest.js leverages powerful frameworks like Express.js or Fastify under the hood, providing a robust architecture for building modern, maintainable back-end applications. Its modular structure, dependency injection, and built-in support for features like middleware, authentication, and database integration make it a popular choice for creating RESTful APIs and microservices.",
    // },
    {
      id : 6,
      imgSrc: './pic/Nextjs.png',
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

    let obj = imagesData.find( (obj) => obj.id === id)

    detailBox1.classList.toggle('visiblite1')
 }