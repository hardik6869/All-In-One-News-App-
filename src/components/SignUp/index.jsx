import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import "./signUp.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="col-md-5 main_box">
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h2 className="text-center my-3" style={{ color: "#5da1ce" }}>
            Sing Up
          </h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            name="number"
            onChange={handleChange}
            value={data.number}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button
            type="submit"
            style={{ backgroundColor: "#5da1ce" }}
            className="btn text-white font-weight-bold mt-3 px-4"
          >
            Sing Up
          </button>
        </form>
        <Link
          to="/login"
          className="nav-link mt-2 font-weight-bold"
          style={{ color: "#5da1ce" }}
        >
          Sign in here !
        </Link>
      </div>
    </div>
  );
};

export default Signup;
