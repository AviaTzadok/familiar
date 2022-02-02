import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <Link to={`/`} id="LinkIN">
        <button className="logOut">
          <LogoutIcon />
        </button>
      </Link>
    </div>
  );
};
export default Home;