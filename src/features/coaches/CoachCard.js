import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CoachCard = ({ coach }) => {
    const {id, image, name } = coach;
    return (
        <Link to={`${id}`}>
        <Card>
            <CardImg
                width='50%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    );
};

export default CoachCard;