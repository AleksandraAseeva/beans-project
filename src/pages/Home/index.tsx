import "./styles.css";
import image from "../../images/main.gif";

export const Home = () => {
  return (
    <div className="home_container">
      <img src={image} alt="" />
      <div className="info">
        <h1>Welcome to the World of Jelly Belly:</h1>
        <p>A Rainbow of Flavors Awaits!</p>
      </div>
    </div>
  );
};
