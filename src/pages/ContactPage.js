import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />
              <Row className='row-content'>
                <Col xs='12'>
                    <hr />
                </Col>
                <ContactForm />
            </Row>
        </Container>
    );
};

export default ContactPage;