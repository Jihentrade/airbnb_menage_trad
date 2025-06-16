import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuoteForm from "./pages/QuoteForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/devis" element={<QuoteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
