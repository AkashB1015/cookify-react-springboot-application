import { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import "../../../App.css";


export default function CookieSlider() {
  const sliderRef = useRef();

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

const cookies = [
  {
    title: "Chocolate Cookie",
    img: "/cards_img/Chocolate.png",
    desc: "Soft, sweet cookies baked with rich chocolate chips. Perfect taste in every bite."
  },
  {
    title: "Peanut Butter Cookie",
    img: "/cards_img/Peanut Butter Cookie.png",
    desc: "Smooth peanut-flavored cookies with a creamy taste. Soft texture in each bite."
  },
  {
    title: "Chocolate Brownie Cookie",
    img: "/cards_img/Chocolate Brownie Cookie.png",
    desc: "Fudgy brownie-style cookies with deep cocoa flavor. Soft center in every bite."
  },
  {
    title: "Shortbread Cookie",
    img: "/cards_img/Shortbread Cookie.png",
    desc: "Classic buttery cookies that melt inside the mouth. Light sweetness in each bite."
  },
  {
    title: "Snickerdoodle Cookie",
    img: "/cards_img/Snickerdoodle.png",
    desc: "Soft cinnamon-sugar cookies with a warm flavor. Sweet comfort in every bite."
  },
  {
    title: "Sugar Cookie",
    img: "/cards_img/Sugar Cookie.png",
    desc: "Simple, sweet cookies with a buttery vanilla taste. Light flavor in every bite."
  },
  {
    title: "Almond Cookie",
    img: "/cards_img/Almond Cookie.png",
    desc: "Crunchy almond cookies baked golden for flavor. Nutty aroma in every bite."
  },
  {
    title: "Coconut Cookie",
    img: "/cards_img/Coconut Cookie.png",
  
    desc: "Chewy cookies filled with fresh coconut flakes. Tropical sweetness in every bite."
  }
];


  return (
    <div className="cookie-wrapper">

      <h2 className="text-center fw-bold mb-4">Our Cookie Varieties</h2>
 
      <button className="arrow arrow-left" onClick={() => scroll("left")}>❮</button>
   
      <div className="cookie-slider" ref={sliderRef}>

        {cookies.map((c, i) => (

          <Card className="cookie-card shadow-sm" key={i}>
            <Card.Img variant="top" src={c.img} className="cookie-img" />
            <Card.Body>
              <Card.Title className="fw-bold text-center">{c.title}</Card.Title>
              <Card.Text className="cookie-text text-justify">{c.desc}</Card.Text>

              <div className="text-center">
                <Button className="buy-btn">Buy Now</Button>
              </div>
            </Card.Body>
          </Card>

        ))}

      </div>

     
      <button className="arrow arrow-right" onClick={() => scroll("right")}>❯</button>

    </div>
  );
}
