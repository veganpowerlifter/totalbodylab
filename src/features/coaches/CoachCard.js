import{Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const CoachCard = () => {
    return (
    <Card>
            <CardImg 
                width='25%'
                src={props.coach.image}
                alt={props.coach.name}
            /> 
            <CardImgOverlay>
                <CardTitle>{props.coach.name}</CardTitle>
            </CardImgOverlay>
 </Card>
);

};


export default CoachCard;