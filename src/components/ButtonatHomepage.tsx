
import { Link } from "react-router-dom";
import '../css/Homepagebutton.css'
export const HomePagebutton = () => {
  return (
    <Link to="/hi">
    <button className="home-page-button">Enter</button>
    </Link>
  );
};
