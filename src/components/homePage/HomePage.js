import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);

  const [allNamesAndImages, setAllNamesAndImages] = useState([]);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const addName = () => {
    // if (event.key === "Enter") {
    // console.log(name);
    // console.log(selectedImage);
    const name_imag = {
      name: name,
      img: imageUrl,
    };
    console.log(name_imag);

    let img_name_to_add = [...allNamesAndImages, name_imag];
    console.log(img_name_to_add);
    setAllNamesAndImages(img_name_to_add);
    // }
  };

  return (
    <div className="App">
      <div>
        {/* <form onSubmit={(e) => addName(e)}> */}
        <label>Name:</label>
        <input
          // type="submit"
          // value="Submit"
          type={"text"}
          className="homePage-searchBox"
          placeholder="Enter name"
          onChange={({ target: { value } }) => setName(value)}
          // onKeyDown={(e) => addName(e)}
          onClick={(e) => addName(e)}
        />
        <input type="submit" value="Submit" onClick={(e) => addName(e)} />
        {/* </form> */}

        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
      </div>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
      <Link to={`/`} id="LinkIN">
        <button className="logOut">
          <LogoutIcon />
        </button>
      </Link>
    </div>
  );
};
export default Home;
