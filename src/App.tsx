import "./App.css";

import ImageHeader from "./ImageHeader/index.tsx";
import Footer from "./Footer/index.tsx";
import BorderHeader from "./BorderHeader/index.tsx";

function App() {
  return (
    <>
      <div className="main">
        <BorderHeader />
        <ImageHeader />
        <Footer />
      </div>
    </>
  );
}

export default App;
