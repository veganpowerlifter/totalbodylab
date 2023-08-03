import SubHeader from "../components/SubHeader"
import { Container } from "reactstrap"
import CoachesList from "../features/coaches/CoachesList"

const CoachesDirectory = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <CoachesList />
        </Container>
    )
}

export default CoachesDirectory