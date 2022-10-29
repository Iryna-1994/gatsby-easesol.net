import * as React from "react"
import { Card } from "react-bootstrap";
import ILine from "../ILine";

const TestimonialCard = (props:any) => {

  return (
    <>
      <Card className="slide-card p-5">
        <Card.Body className="flex justify-content flex-col items-center mb-7">
          <img src={props.cardIcon} width="32" className="mb-8" />
          <Card.Text className="slide-card-text text-center text-lg mb-2">
            {props.clientReview}
          </Card.Text>
          <ILine />
          <Card.Text className="slide-card-text text-center text-black">
            {props.clientName}
          </Card.Text>
          <Card.Text className="slide-card-text text-center text-lg">
            {props.clientPosition}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TestimonialCard;
