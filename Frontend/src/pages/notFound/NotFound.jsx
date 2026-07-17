import { Link } from "react-router-dom";
import "./NotFound.css";
import { HelpOutlined } from "@mui/icons-material";

export default function NotFound() {
  return (
    <div className="mainbox notfound-page">
      <div className="error-number-container">
        <div className="err">4</div>
        <HelpOutlined
          className="mui-spin-icon"
          sx={{ fontSize: "9rem", color: "#ffffff" }}
        />
        <div className="err2">4</div>
      </div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link className="link" to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
}
