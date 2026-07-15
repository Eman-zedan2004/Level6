import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div className="error">
      <div className="face">
        <div className="band">
          <div className="red" />
          <div className="white" />
          <div className="blue" />
        </div>
        <div className="eyes" />
        <div className="dimples" />
        <div className="mouth" />
      </div>
      <h1>Oops! Something went wrong!</h1>
      <div className="btn" onClick={() => {
        navigate("/");
      }}>Return to Home</div>
    </div>
  );
}
