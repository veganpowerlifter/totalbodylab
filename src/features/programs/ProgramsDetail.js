import { Card, CardImg, CardText, CardBody, Col, Row, Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';


const ProgramDetail = ({ program }) => {
    const { image, name, description } = program;

    return (
        <Container>
            <SubHeader current='Programs' />
            <Col sm='6'></Col>
            <h3>  Powerlifting Programming  </h3>
            <p>
                Custom training programming with weights recommendations for every workout, feedback + form corrections on every workout, every lift be a part of my team, a community of like-minded lifters 24:7 direct access to your coach powerlifting meet prep guidance weight loss and body recomposition for non-athletes unlimited plan adjustments weekly check-ins By purchasing this product I agree to TotalBodyLab Privacy Policy, Liability Policy and PAR-Q and <a href='https://totalbodylab.com/privacy-policy/' />
            </p>


            <Row md='12' classname='m-4'>
                <Col md='12' className='m-4' > {/*<Col md='5' className='m-1'> PER WEEK 2 */}
                    <Card>
                        <CardImg top src={image} alt={name} />
                        <CardBody>
                            <CardText>{description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProgramDetail;