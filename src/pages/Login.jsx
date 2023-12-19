import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.user) {
      localStorage.setItem("user", JSON.stringify(context.user));
      navigate("/posts");
    }
  }, [context.user]);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);

        const token = credential.accessToken;
        const user = result.user;
        context.setUser({
          token,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        <div className="card text-center p-3 border-0 shadow-sm">
          <div className="card-body">
            <button className="btn btn-success mt-2" onClick={handleLogin}>
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
