import { h } from "preact";

interface PopupProps {
  isOpen: boolean;
  success: boolean;
}
export default function Popup({ isOpen, success }: PopupProps) {
  return (
    <div className={`message-popup ${isOpen ? "open" : ""}`}>
      <div className="body">
        {success ? (
          <span className="success">вау +5 їжачків</span>
        ) : (
          <span className="failure"> -5</span>
        )}
      </div>
    </div>
  );
}
