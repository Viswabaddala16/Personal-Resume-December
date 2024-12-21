import React from 'react'
import './portfolio.css';
// import Img1 from  "../../Assets/portifolio-image.jpg";
import IMG1 from '../../Assets/IMG1.png';
import IMG2 from '../../Assets/IMG2.png';
import IMG3 from '../../Assets/IMG3.png';
import IMG4 from '../../Assets/IMG4.png';
import IMG5 from '../../Assets/IMG5.png';
import BookStorePhoto from '../../Assets/Book Store Photot.jpg';
import LoginImage from '../../Assets/LoginImage.jpg';
import DictionaryImage from '../../Assets/DictionaryImage.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title : "PIZZA REACT WEBSITE",
    github: "https://github.com/Viswabaddala16/Pizza-React-Website",
    demo: "https://pizza-react-website-six.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title : "SHOPING CART WEBSITE",
    github: "https://github.com/Viswabaddala16/ShopCart-App-Project",
    demo: "https://viswabaddala16.github.io/ShopCart-App-Project/"
  },
  {
    id: 3,
    image: IMG3,
    title : "PODCAST REACT WEBSITE",
    github: "https://github.com/Viswabaddala16/Podcast-React-App",
    demo: "https://podcast-react-project.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title : "FINANCE TRACKER WEBSITE",
    github: "https://github.com/Viswabaddala16/Finance-Tracker-React-Website",
    demo: "https://finance-tracker-react-website.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title : "TODO LIST",
    github: "https://github.com/Viswabaddala16/Todo-List",
    demo: "https://todo-list-dusky-psi.vercel.app/",
  },
  {
    id: 6,
    image: BookStorePhoto,
    title : "MERN STACK BOOK STORE WEB APP",
    github: "https://github.com/Viswabaddala16/Book-Store-Web-App",
    demo: "https://book-store-web-frontend.onrender.com/",
  },
  {
    id: 7,
    image: LoginImage,
    title : "Login Page With Google Authentication",
    github: "https://github.com/Viswabaddala16/Simple-Web-App",
    demo: "https://simple-web-app-beta.vercel.app/",
  },
  {
    id: 8,
    image: DictionaryImage,
    title : "React Dictionary Web App",
    github: "https://github.com/Viswabaddala16/Simple-Web-App",
    demo: "https://github.com/Viswabaddala16/React-Dictionary-App",
  }
]

const Portfolio = () => {
  return (
    <section id="portifolio">
     <h5>My Recent Work </h5>
     <h2>Portfolio</h2>
     <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => (
          <article key={id} className='portifolio__items'>
            <div className='portifolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portifolio__item-cta">
            <a href={github} className = "btn" target='__blank'>Git Hub</a>
            <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
          </article>
        ))
      }
         
     </div>

    </section>
  )
}

export default Portfolio;
