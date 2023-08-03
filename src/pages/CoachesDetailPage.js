import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import SubHeader from "../components/SubHeader";
// import CoachesList from "../features/coaches/CoachesList";
import CoachDetail from "../features/coaches/CoachDetail"
import { useSelector } from "react-redux";
import { selectCoachById } from "../features/coaches/coachesSlice";

const CoachesDetailPage = () => {
    const {coachId} = useParams()
    const coach = useSelector(selectCoachById(coachId))
    return (
        <Container>
            <SubHeader current = 'Coaches'>
              
            </SubHeader>
            <CoachDetail coach={coach}/>
            {/* <CoachesList /> */}
        </Container>
    );
};

export default CoachesDetailPage;