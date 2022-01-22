import { h } from "preact";
import MainPageButton from "../components/mainPage/MainPageButton";

interface MainProps {
  path: string;
}

export default function Main({}: MainProps) {
  return (
    <main className="main-page">
      <MainPageButton text="Продовжити" icon="play" href="/q/1" />
      <MainPageButton text="Таблиця лідерів" icon="leaderBoard" href="/" />
      <MainPageButton text="Налаштування" icon="settings" href="/" />
    </main>
  );
}
