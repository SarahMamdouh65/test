import jwt_decode from "jwt-decode";

const key = "authToken";

const storeToken = (authToken) => {
  try {
    localStorage.setItem(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = () => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
    return null;
  }
};

const getUser = () => {
  const token = getToken();
  return token ? jwt_decode(token) : null;
};

const removeToken = () => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export { getToken, getUser, removeToken, storeToken };
