import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      dispatch(login());
      navigate("/home");
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <h1>Sign In</h1>
          <form className={styles.form_container} onSubmit={handleSubmit}>
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
              className="btn btn-success font-weight-bold mt-3 px-4"
            >
              Sing In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button
              type="button"
              className="btn btn-light px-4 text-primary font-weight-bold m-2"
            >
              Sing Up
            </button>
          </Link>
          <NavLink
            className="nav-link mt-5 font-weight-bold"
            style={{ color: "white" }}
            to="/"
          >
            <i class="fa-solid fa-arrow-left-long"></i> Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
