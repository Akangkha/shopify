import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ResultsCard = ({ imageUrl, rrp, current, index, name }) => {
  //component which receives the data like imageUrl etc. and displays it in the result card
  const [iconColor, setIconColor] = useState("black");

  const handleColor = () => {
    setIconColor(iconColor === "red" ? "black" : "red"); //wish-list color change
  };
  const image = "https://" + imageUrl;
  if (rrp === "") {
    const priceNumber = parseInt(current.replace(/\D/g, ""), 10);
    rrp = priceNumber - (priceNumber * 30) / 100;
  }
  return (
    <div className="ResultsCard">
      <div className="productImage">
        <img key={index} src={image} width="80%" alt="product"></img>

        <div className="wishList">
          <FavoriteIcon
            onClick={handleColor}
            style={{
              color: iconColor,
              position: "relative",
              right: "40px",
              top: "10px",
            }}
          />
        </div>
      </div>
      <div className="viewProduct">View product</div>

      <div className="info">
        <p style={{ fontWeight: "bold" }}>{name}</p>
        <div>
          <span style={{ textDecoration: "line-through", color: "#00000066" }}>
            ${rrp}
          </span>
          <span style={{ color: "#6D84FF", fontWeight: "bold" }}>
            {" "}
            {current}
          </span>
        </div>
        <div>
          <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
          <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
          <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
          <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
          <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
          <span>(210)</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
