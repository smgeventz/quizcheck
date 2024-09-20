const { default: axiosInstance } = require(".");

const apiUrl = import.meta.env.NEXT_PUBLIC_API_BASE_URL;


export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/register`, payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/login`, payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getUserInfo = async () => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/get-user-info`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
export const appointSubAdmin = async (payload) => {
    try {
      const response = await axiosInstance.post(`${apiUrl}/api/users/appoint-subadmin`, payload);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  
