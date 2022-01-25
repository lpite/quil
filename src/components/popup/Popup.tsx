import { h } from "preact";

interface PopupProps {
  isOpen: boolean;
}
export default function Popup({ isOpen }: PopupProps) {
  return (
    <div className={`message-popup ${isOpen ? "open" : ""}`}>
      <div className="body succes">
        <span>вау +5 їжачків</span>
      </div>
    </div>
  );
}
