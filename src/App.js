import "./App.css";
import CoachesList from "./features/coaches/CoachesList.js";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
        <CoachesList />
      <Footer />
    </div>
  );
}

export default App;

// we've stopped here: https://learn.nucamp.co/mod/book/view.php?id=5927&chapterid=6138
