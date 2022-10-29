import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "gatsby"

const ProductCard = (props:any) => {

  const [hover, setHover] = useState(false);

  const handleSlideHover = () => {
    setHover(true);
  }

  const handleSlideLeave = () => {
    setHover(false);
  }

  return (
    <>
      <Card className="slide-card bg-stone-200 p-5" onMouseEnter={handleSlideHover} onMouseLeave={handleSlideLeave}>
        <Card.Body className="flex justify-content flex-col items-center mb-7">
          <Card.Img variant="top" src={hover === false ? props.imgBlackSrc : props.imgWhiteSrc} />
          <Card.Text className="slide-card-text text-center -mt-7">
            {props.cardDesc}
          </Card.Text>
        </Card.Body>
        <Link to={props.to} className="slide-card-link border border-slate-700 px-2 py-1">Logistics</Link>
      </Card>
    </>
  );
};

export default ProductCard;
