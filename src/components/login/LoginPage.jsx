import { FaArrowRightToBracket } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spin } from "antd";
import "./LoginPage.css";

export default function LoginPage() {
  const [show, setShow] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!password.trim()) return;
    setLoading(true);

    setTimeout(() => {
      if (password.toLowerCase() === "oybek") {
        sessionStorage.setItem("tokenn", password);
        window.onbeforeunload = {};
        window.location.replace('/');
      } else {
        setPassword("");
        sessionStorage.clear();
        toast.error("Parol noto'g'ri! Iltimos qaytadan kiriting");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="llogin container p-4">
      <ToastContainer />
      <div className="row w-100 g-5 d-flex justify-content-evenly">
        <div className="col-md-5 d-flex justify-content-center">
          <div className="screen">
            <div className="screen__content">
              <div className="login">
                <h6 className="h6 text-center fw-bold cl">
                  Saytga kirish uchun parolni kiriting!
                </h6>
                <div className="login__field mt-4 ms-3">
                  <i className="login__icon">
                    <RiLockPasswordFill />
                  </i>
                  <input
                    id="password"
                    value={password}
                    disabled={loading}
                    placeholder="Password"
                    className="login__input"
                    type={show ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="cr" onClick={() => setShow(!show)}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  disabled={loading}
                  onClick={onSubmit}
                  className="button login__submit"
                >
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon">
                    {loading ? <Spin /> : <FaArrowRightToBracket />}
                  </i>
                </button>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
