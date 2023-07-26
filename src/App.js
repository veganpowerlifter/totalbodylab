import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoachesPage from './pages/CoachesPage';
import ProgramsPage from './pages/ProgramsPage';
import CalendarPage from './pages/CalendarPage';
// import CoachesPage from "./pages/CoachesPage";
// import CalendarPage from "./pages/CalendarPage";
// import ProgramsPage from "./pages/ProgramsPage";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='coach' element={<CoachesPage />} />
        <Route path='programs' element={<ProgramsPage />} />
        <Route path='calendar' element={<CalendarPage />} />

        {/* <Route path='calendar' element={<CalendarPage />} /> */}
        {/* <Route path='programs' element={<ProgramsPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// we've stopped here: https://learn.nucamp.co/mod/book/view.php?id=5927&chapterid=6138