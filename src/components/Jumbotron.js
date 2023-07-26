import { 
    // Container,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
} from "reactstrap";
// import {Button} from "./Button";
import jumbotron from "../app/assets/img/jamesProfile.jpg"; //replace with jumbotron img




const Jumbotron = () => {
    return (
        <>
            <Card inverse>
                <CardImg
                src={jumbotron}
                alt="lats for days"
                style={{
                    height: 270
                }}
                width="100%"
                />
                <CardImgOverlay>
                <CardTitle tag="h5">
                    Card Title
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                    <small className="text-muted">
                    Last updated 3 mins ago
                    </small>
                </CardText>
                </CardImgOverlay>
            </Card>
         </>
    );
};


export default Jumbotron;