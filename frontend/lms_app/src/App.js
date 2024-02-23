import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AiTutor from "./pages/AiTutor";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";
import CoursePage from "./pages/CoursePage";
import CourseMaterial from "./pages/CourseMaterial";
import FlashCards from "./pages/FlashCards";
import ShortNotes from "./pages/ShortNotes";
import KnowledgeGraph from "./pages/KnowledgeGraph";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ai_tutor" element={<AiTutor />} />
          <Route exact path="/quiz" element={<QuizPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/course_page/:course_code"
            element={<CoursePage />}
          />
          <Route
            exact
            path="/course_material/:course_code/:week_number"
            element={<CourseMaterial />}
          />
          <Route
            exact
            path="/flashcards/:course_code/:week_number"
            element={<FlashCards />}
          />
          <Route
            exact
            path="/short_notes/:course_code/:week_number"
            element={<ShortNotes />}
          />
          <Route
            exact
            path="/knowledge_graph/:course_code/:week_number"
            element={<KnowledgeGraph />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
