import './App.css';
import { Route, Routes } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoachesDetailPage from './pages/CoachesDetailPage';
import ProgramsPage from './pages/ProgramsPage';
// import CalendarPage from "./pages/CalendarPage";
import ContactPage from "./pages/ContactPage";
import CoachesDirectory from './pages/CoachesDirectory';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='directory' element={<CoachesDirectory />} />
        {/* <Route path='programs' element={<ProgramsPage />} /> */}
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory/:coachId' element={<CoachesDetailPage/>}/>
        {/* <Route path='contact' element={<ContactPage />} /> */}
        {/* <Route path='calendar' element={<CalendarPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// we've stopped here: https://learn.nucamp.co/mod/book/view.php?id=5927&chapterid=6138