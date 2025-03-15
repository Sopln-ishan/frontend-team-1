import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const histories = [{
    img: "../images/gray-screen-img.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis dolores iusto ipsa, tempore deleniti consectetur, rem voluptatibus distinctio adipisci, minus minima modi nobis error. Laboriosam non soluta mollitia quam.",
    floatImage: "left",
    alignText: "left",
    id: 1,
},
{
    img: "../images/gray-screen-img.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis dolores iusto ipsa, tempore deleniti consectetur, rem voluptatibus distinctio adipisci, minus minima modi nobis error. Laboriosam non soluta mollitia quam.",
    floatImage: "right",
    alignText: "right",
    id: 2
}];


  return (
    <>
    <div className="whyusbkgimg">
      <section id="why-us" >
        <div className="why-us-heading-and-bkg-img">
          <h1>Why Us?</h1>
        </div>
        
        <div className="icons">
          <div class="icon-card">
            <a href="#Reliability" ><img src="../images/trust.png" alt="Our Reliability" height="100px" width="auto" class="rounded-image" /></a> 
            <h3 className="icon-text">Our Relaibility</h3>
          </div>
          <div class="icon-card">
            <a href="#Ratings"><img src="../images/people.png" alt="What People Think" height="100px" width="auto"class="rounded-image" /></a>
            <h3 className="icon-text">People's Reviews</h3>
          </div>
          <div class="icon-card">
            <a href="#Achievements"><img src="../images/victory.png" alt="Our Achievements" height="100px" width="auto" class="rounded-image" /></a>
            <h3 className="icon-text">Our Achievements</h3>
          </div>
        </div>
      </section>

        <section id="Reliability">
        {/* Trust and Ensure Section */}
        <div className="trust-ensure">
          <div className="trust-card">
            <h2>You Can Trust Us!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!</p>
          </div>
          <div className="trust-card">
            <h2>What Do We Ensure?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi asperiores exercitationem voluptatem consequatur a facere, ea aliquid! Eius a, nam velit deleniti quibusdam qui nobis. Sapiente, labore aliquid? Totam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius animi, laudantium nemo adipisci fugiat, placeat ducimus aspernatur enim recusandae perspiciatis nesciunt sint praesentium sunt. Beatae fugit quis animi facere in!</p>
          </div>
        </div>
        </section>

        <section id="Ratings">
        {/* Ratings Section */}
        <div className="ratings">
          <h2>What People Think</h2>
          <div className="rating-bars">
            <div className="rating-bar">
            <h2>Review 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi asperiores exercitationem voluptatem consequatur a facere, ea aliquid! Eius a, nam velit deleniti quibusdam qui nobis. Sapiente, labore aliquid? Totam.</p>
          </div>
          <br></br>
            <div className="rating-bar">
              <h2>Review 2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi asperiores exercitationem voluptatem consequatur a facere, ea aliquid! Eius a, nam velit deleniti quibusdam qui nobis. Sapiente, labore aliquid? Totam.</p>
          </div>
            <div className="rating-bar">
              <h2>Review 3</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi asperiores exercitationem voluptatem consequatur a facere, ea aliquid! Eius a, nam velit deleniti quibusdam qui nobis. Sapiente, labore aliquid? Totam.</p>
          </div>
          </div>
          <p className="our-rating">Our Rating: ⭐⭐⭐⭐⭐</p>
        </div>
        </section>

        <section id="Achievements">
        {/* Achievements Section */}
        <h1 className="achievements-heading">So Far, So Much ...</h1>
        <div className="achievements">
        
          <div className="achievement-card">
            <h2>Achievement 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit doloribus minus atque quaerat. Veritatis porro enim culpa. Nihil voluptatibus quas debitis eligendi esse error minima ullam voluptatem iusto sit.</p>
          </div>
          <div className="achievement-card"><h2>Achievement 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit doloribus minus atque quaerat. Veritatis porro enim culpa. Nihil voluptatibus quas debitis eligendi esse error minima ullam voluptatem iusto sit.</p>
          </div>
          <div className="achievement-card"><h2>Achievement 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit doloribus minus atque quaerat. Veritatis porro enim culpa. Nihil voluptatibus quas debitis eligendi esse error minima ullam voluptatem iusto sit.</p>
          </div>
        </div>
        </section>

        <section id="future">
        {/* Future Goals Section */}
        <div class="future-goals">
          <h2>Future Goals:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        </section>
    </div>
    </>
  );
}

export default WhyUs;
