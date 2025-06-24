import "./styles/App.css";
import RouterConfig from "./router/routerConfig";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <Helmet>
        <title>Del coup d'éclat - Ménage à Nice</title>
      </Helmet>
      <div className="App">
        <RouterConfig />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
