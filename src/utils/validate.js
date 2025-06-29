export const checkValidData = (email, password) => {
  // Email validation
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters";

  return null;
};
