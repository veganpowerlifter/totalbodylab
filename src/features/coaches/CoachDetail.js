import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CoachDetail = ( {coach} ) => {
    const { image, name, description } = coach;

    return (
        <Col md='12' className='m-4'> {/*<Col md='5' className='m-1'> PER WEEK 2 */}
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CoachDetail;