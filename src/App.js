import React from "react";

import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
