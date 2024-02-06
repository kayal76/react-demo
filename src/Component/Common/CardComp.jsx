import React from 'react';
import "./cardcom.css";
import{
    Card,CardBody,CardSubtitle,CardText,CardTitle,Button
}from "reactstrap"

function  CardComp(props)
 {
  return (
    <Card
  style={{
    width: '15rem',
    margin:"20px"
  }}
>
  <img
    alt="Sample"
    src={props.img }
    height={"200px"}
    width={"200px"}
/>
  <CardBody>
    <CardTitle tag="h5">
      {props.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     rs: {props.price}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <div>
    <button className='btn1'>30% off</button>
    <p className='one'> Deal of Delay</p>
    </div>
    <Button>
      BUY
    </Button>
  </CardBody>
</Card>
  )
}
export default CardComp