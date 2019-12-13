import React, {useState} from "react";
import "./../App.css";
import {Card, CardImg, CardBody, CardText, Button, UncontrolledPopover, PopoverBody, PopoverHeader} from 'reactstrap';

const Photo = props => {
    console.log(props);

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
      <div>
      <div>
        <Card className="photo-card">
        <CardBody>
          <CardImg src={props.image} alt="space"/>
          <Button id="Popover1" type="button">
            Details
          </Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <UncontrolledPopover trigger="click" placement="right"  target="Popover1" isOpen={popoverOpen} toggle={toggle}>
            <PopoverHeader>
              {props.title}
            </PopoverHeader>
            <PopoverHeader>
              Date: {props.date} / Credit: {props.photog}
            </PopoverHeader>
            <PopoverBody>
              {props.explanation}
            </PopoverBody>
        </UncontrolledPopover>
      </div>
      </div>
    );
  };

  export default Photo;