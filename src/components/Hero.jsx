const Hero = () => {
  return (
    <div className="heroElement">
      <div className="textContent">
        <div className="textSlogan">YOUR FEET DESERVE THE BEST</div>

        <div className="textBody">
          "Unleash the athlete within. Push your limits, conquer your goals.
          Defy expectations. Elevate your game, every step. Greatness is not in
          being strong, but in the right use of strength."
        </div>
        <div className="textButtons">
          <button className="loginButton">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="sideLinks">
          <p>Also available on</p>
          <div className="sideImages">
            <img className="sideLinkImages1" src="../images/flipkart.png" />
            <img className="sideLinkImages2" src="../images/amazon.png" />
          </div>
        </div>
      </div>
      <div className="imageContent">
        <img src="../images/hero-image.png" className="shoeImage" />
      </div>
    </div>
  );
};

export default Hero;
