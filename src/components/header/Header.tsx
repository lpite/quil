import { h } from "preact";
import { Link } from "preact-router";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="link header-link ">
        меню
      </Link>
      <span className="header-score">999 їжачків</span>
      <img src="../../assets/user.svg" alt="" className="header-image" />
    </header>
  );
}
