import "../../src/Style/Messanger.css";

export default function Messanger({ message, setMessage }) {
  setTimeout(() => {
    setMessage({ message: "", type: "" });
  }, 2000);
  if (message.type == "success") {
    message = <div className="success">{message.message}</div>;
  } else {
    message = <div className="error">{message.message}</div>;
  }
  return message;
}
