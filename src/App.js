import React from "react";
import Apps from './components/Apps';
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="app">
     <Header/>
     <Apps/> 
     <Footer/>
    </div>
  );
}