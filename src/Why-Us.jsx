import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Styles/WhyUs.css";

const WhyUs = () => {
  const icons = [
    {
      name: 'Our Reliability',
      link: '#Reliability',
      img: '../images/trust.png',
      altText: 'Our Reliability Image',
      height: '200px',
      width: '200px'
    },
    {
      name: 'Our Achievements',
      link: '#Achievements',
      img: '../images/victory.png',
      altText: 'Our Achievements Image',
      height: '200px',
      width: '200px'
    }
  ];

  const reliabilities = [
    {
      heading: 'Consistency',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!'
    },
    {
      heading: 'Delivery Time',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!'
    }
  ];

  const achievements = [
    {
      heading: 'Achievement 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!',
      img: '../images/gray-screen-img.png',
    },
    {
      heading: 'Achievement 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!',
      img: '../images/gray-screen-img.png',
    },
    {
      heading: 'Acheivement 3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!',
      img: '../images/gray-screen-img.png',
    }
  ];

  return (
    <>
      <section id="why-us" >
        <div className="why-us-heading-and-bkg-img">
          <h1>Why Us?</h1>

          <div className="icons">
            { 
              icons.map((icon, index) => (
                <div className="icon-card" key={ index }>
                  <Link to={ icon.link } className="icons-navlink">
                    <img src={ icon.img }
                      alt={ icon.name } 
                      style={{height: icon.height, width: icon.width}} 
                      className="rounded-image" />

                    <p className="icon-text">{ icon.name }</p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>

        <section id="Reliability">
        {/* Trust and Ensure Section */}
        <h2 className="reliability-heading">What do we ensure?</h2>
        <div className="trust-ensure">
          {
            reliabilities.map((reliability, index) => (
              <div className="trust-card" key={ index }>
                <h2>{ reliability.heading }</h2>
                <p>{ reliability.text }</p>
              </div>
            ))
          }
        </div>
        </section>

        <section id="Achievements">
        {/* Achievements Section */}
          <h1 className="achievements-heading">So Far, So Much ...</h1>
          <div className="achievements">
            {
              achievements.map((achievement, index) => (
                <div className="achievement-card" key={ index }>
                  <img src={ achievement.img } />

                  <div className="achievement-text">
                    <h2>{ achievement.heading }</h2>
                    <p>
                      { achievement.description }
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section id="future">
        {/* Future Goals Section */}
          <div className="future-goals">
            <h2>Future Goals:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default WhyUs;
