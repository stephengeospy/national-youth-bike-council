import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-grow">Main</div>
      <Footer />
    </div>
  );
}

export default App;
