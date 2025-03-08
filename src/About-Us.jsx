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
                        <p>Your Mission goes here</p>
                    </div>

                    <div className="vision-section">
                        <h2>Our Vision</h2>
                        <p>Your vision goes here</p>
                    </div>
                </div>

                <div className="history-section">
                    <h1>Our Glorius Past</h1>
                    
                    { histories.map((history) => (
                        <div key={ history.id }>
                            <img src={ history.img } className="history-image" style={{ float: history.floatImage }}/>
                            <span className="history-image-text" style={{ textAlign: history.alignText}}>{ history.text }</span>
                        </div>
                    )) }
                </div>
            </div>
        </> 
    );
}
 
export default AboutUs;