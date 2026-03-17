import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isValid = form.email.trim() !== "" && form.password.trim() !== "";

  const handleLogin = () => {
    if (!isValid) return;
    navigate("/profile");
  };

  return (
    <div>
      <h1 className="title">
        Signin to your <br /> PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit
      </p>

      <div className="form-group">
        <label className="input-label">Email address</label>

        <input
          className="input-field"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="input-label">Password</label>

        <input
          type="password"
          className="input-field"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button
        className={isValid ? "btn-primary" : "btn-disabled"}
        style={{ marginTop: "28px" }}
        disabled={!isValid}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
