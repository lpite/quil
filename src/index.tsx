import { h } from "preact";
import Router from "preact-router";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Question from "./pages/Question";
import "./style";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Main path="/" />
        <Question path="q/:id" />
      </Router>
    </div>
  );
}
