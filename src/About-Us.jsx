import StatsCounter from "./StatsCounter";

const AboutUs = () => {
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
            <div className="about-us">
                <div className="about-us-heading-and-bkg-img">
                    <h1>About Us</h1>
                    <p>A brief description about what you do</p>
                </div>

                <div className="vision-mission-section">
                    <div className="mission-section">
                        <h2>Our Mission</h2>
                        <p>Our mission is to continually enhance our customer service by tailoring a broad range of services to meet your unique business needs. We are dedicated to providing innovative, cost-effective, and sustainable logistics solutions that support your ongoing success.
                        </p>
                    </div>

                    <div className="vision-section">
                        <h2>Our Vision</h2>
                        <p>Our vision is to become the most trusted supply chain partner in the UAE and GCC by consistently delivering reliable, efficient, and innovative logistics solutions that our customers can depend on daily.</p>
                    </div>
                </div>
                <hr />
                <StatsCounter />
                <hr />
            </div>
        </> 
    );
}
 
export default AboutUs;