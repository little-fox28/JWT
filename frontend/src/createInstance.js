import axios from "axios";
import jwt_decode from "jwt-decode"

const refreshToken = async () => {
  try {
    const res = await axios.post("/v1/auth/refresh", {
      withCredentials: true, // Meaning if you have a cookie it will be added to the header
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAxios = (user, dispatch,loginSuccess) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken(); // it return refreshToken and accessToken
        const refreshUser = {
          ...user,
          refreshToken: data.refreshToken,
          accessToken: data.accessToken,
        };
        dispatch(loginSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  ); // Check refreshToken before taking action (Using jwt-decode)
  return newInstance;
};
