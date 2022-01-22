import { h } from "preact";
import { Link } from "preact-router";

interface MainPageButtonProps {
  text: string;
  icon: "play" | "settings" | "leaderBoard";
  href: string;
}

export default function MainPageButton({
  text,
  icon,
  href,
}: MainPageButtonProps) {
  return (
    <Link href={href} className="link main-page-button">
      <span className="text">{text}</span>
      <img src={`../../assets/${icon}.svg`} alt="" className="icon" />
    </Link>
  );
}
