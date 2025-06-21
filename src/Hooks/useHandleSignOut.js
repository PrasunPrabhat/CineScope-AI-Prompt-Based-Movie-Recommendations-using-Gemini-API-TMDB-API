import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/UserDataSlice";
import { toast } from "react-toastify";

// 🔹 Custom Hook: Handle sign out logic
const useHandleSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Signed Out 👋", { autoClose: 3000 });
        navigate("/");
      })
      .catch(() => {
        toast.error("Sign out failed ❌");
      });
  };

  return handleSignOut;
};

export default useHandleSignOut;