import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CoachCard = ({ coach }) => {
    const { image, name } = coach;
    return (
        <Card>
            <CardImg
                width='50%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default CoachCard;