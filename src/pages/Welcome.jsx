import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "auto" }}>
      <h1 className="title">Welcome to PopX</h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit
      </p>

      <button className="btn-primary" onClick={() => navigate("/signup")}>
        Create Account
      </button>

      <button className="btn-secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
