import CoachCard from "./CoachCard";
import {Row, Col} from 'reactstrap';
import {selectAllCoaches} from './coachesSlice';

const CoachesList = () => {
return (
    <Row className="ms-auto">
    {selectAllCoaches.map((coach) => {
        return (
            <Col md='5' className='m-4' key={coach.id}>
                <CoachCard coach={coach} />
            </Col>
        );
    })}
    </Row>
    )
};

export default CoachesList;