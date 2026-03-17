import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div>
      <h1 className="title">
        Create your <br /> PopX account
      </h1>

      {}
      <div className="form-group">
        <label className="input-label">
          Full Name<span className="required">*</span>
        </label>

        <input
          className="input-field"
          placeholder="Marry Doe"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      {}
      <div className="form-group">
        <label className="input-label">
          Phone number<span className="required">*</span>
        </label>

        <input
          className="input-field"
          placeholder="Marry Doe"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {}
      <div className="form-group">
        <label className="input-label">
          Email address<span className="required">*</span>
        </label>

        <input
          className="input-field"
          placeholder="Marry Doe"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {}
      <div className="form-group">
        <label className="input-label">
          Password<span className="required">*</span>
        </label>

        <input
          type="password"
          className="input-field"
          placeholder="Marry Doe"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      {}
      <div className="form-group">
        <label className="input-label">Company name</label>

        <input
          className="input-field"
          placeholder="Marry Doe"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      {}
      <p className="form-question">
        Are you an Agency?<span className="required">*</span>
      </p>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={form.agency === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            checked={form.agency === "no"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button
        className="btn-primary"
        style={{ marginTop: "28px" }}
        onClick={handleSubmit}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
