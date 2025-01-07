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

function productShowOrNot(e , id){
    
    let obj = cardsData.find( (obj) => obj.id === id)
    console.log(obj)
    
    let parent = e.target
    // console.log(parent)
    
    iconPic.src = obj.imgSrc
    title.innerHTML = obj.title

    SkillName.innerHTML = obj.skillName

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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel sunt nostrum accusantium laboriosam veniam! Reprehenderit,',
    },
    {
      imgSrc: './pic1.jpg',
      title : 'Next JavaScript Library for full stack',
      skillName :'Next js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel sunt nostrum accusantium laboriosam veniam! Reprehenderit,',
    },
    {
      imgSrc: './pic1.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel sunt nostrum accusantium laboriosam veniam! Reprehenderit,',
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
    h3.textContent = cardData.description;
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(h3);

    // cardDiv.addEventListener('click', productShowOrNot);
    // cardDiv.onclick = productShowOrNot(cardData.id)
    cardDiv.onclick = function (e) {
        productShowOrNot(e, cardData.id);
    };

    projDiv.appendChild(cardDiv);
  });

// Select the parent element where new content will be added
let myPro = document.querySelector('.proj');
myPro.className = 'proj'

// Data for dynamic creation
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

    detailBox1.classList.toggle('visiblite1')
 }