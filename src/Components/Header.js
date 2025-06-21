import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "firebase/analytics";
import { addUser } from "../utils/UserDataSlice";
import { LOGO, PHOTO_URL } from "../utils/Constants/Constant";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const handleButtonCLick = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const fullName = `${firstName} ${lastName}`.trim();

    const validationMessage = checkValidData(email, password);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // ✅ Update display name
          return updateProfile(user, {
            displayName: fullName,
            photoURL: { PHOTO_URL },
          }).then(() => {
            dispatch(
              addUser({
                uid: user.uid,
                email: user.email,
                displayName: fullName,
                photoURL: user.photoURL || null,
              })
            );
            // console.log("User Created & Name Updated:", user);
            toast.success("Signed Up Successfully ✅");
            setTimeout(() => {
              navigate("/browse");
            }, 500);
            setErrorMessage("");
            if (emailRef.current) emailRef.current.value = "";
            if (passwordRef.current) passwordRef.current.value = "";
            if (confirmPasswordRef.current)
              confirmPasswordRef.current.value = "";
            if (firstNameRef.current) firstNameRef.current.value = "";
            if (lastNameRef.current) lastNameRef.current.value = "";
            setShowForm(false);
          });
        })
        .catch((error) => {
          toast.error(`${error.message} ❌`, { autoClose: 4000 });
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("Signed In:", user);
          toast.success("Signed In Successfully 🔓");
          setTimeout(() => {
            navigate("/browse");
          }, 500);
          setErrorMessage("");
          if (emailRef.current) emailRef.current.value = "";
          if (passwordRef.current) passwordRef.current.value = "";
          if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
          setShowForm(false);
        })
        .catch((error) => {
          toast.error(`${error.message + "User Not Found"} ❌`, {
            autoClose: 4000,
          });
          setErrorMessage(error.message);
        });
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setErrorMessage("");
  };

  return (
    <>
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center opacity-100 justify-between px-4 md:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent z-50">
        <img
          className="w-32 sm:w-36 md:w-44 lg:w-48 opacity-100"
          src={LOGO}
          alt="Netflix Logo"
        />
        <button
          onClick={() => {
            setShowForm(true);
            setIsSignUp(false);
          }}
          className={`text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-xs sm:text-sm md:text-base ${
            showForm ? "hidden" : ""
          }`}
        >
          Sign In
        </button>
      </header>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4 sm:p-6 overflow-y-auto">
          <div className="bg-black text-white rounded-lg w-full bg-opacity-90 max-w-md p-6 sm:p-8 relative min-h-[40rem] max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-4 text-white text-2xl font-bold hover:text-red-600"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>

            <div className="mt-6 sm:mt-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h2>
              <form className="space-y-4">
                {isSignUp && (
                  <>
                    <input
                      type="text"
                      ref={firstNameRef}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <input
                      type="text"
                      ref={lastNameRef}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </>
                )}
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  autoComplete="current-password"
                />
                {isSignUp && (
                  <input
                    type="password"
                    ref={confirmPasswordRef}
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 bg-neutral-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                )}

                {errorMessage && (
                  <p className="text-red-500 text-sm -mt-2">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
                  onClick={handleButtonCLick}
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>

                {!isSignUp && (
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span className="hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </div>
                )}

                <div className="text-gray-400 mt-4 text-sm">
                  {isSignUp ? "Already have an account?" : "New to Netflix?"}{" "}
                  <span
                    onClick={toggleMode}
                    className="text-white hover:underline cursor-pointer"
                  >
                    {isSignUp ? "Sign In now." : "Sign up now."}
                  </span>
                </div>
              </form>
            </div>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  );
};

export default Header;
