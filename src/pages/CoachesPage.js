import { Container } from "reactstrap";
// import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import CoachesList from "../features/coaches/CoachesList";

const CoachesPage = () => {
    return (
        <Container>
            <SubHeader >
                <CoachesList />
            </SubHeader>
        </Container>
    );
};

export default CoachesPage;