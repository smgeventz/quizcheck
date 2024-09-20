const { default: axiosInstance } = require(".");

const apiUrl = import.meta.env.NEXT_PUBLIC_API_BASE_URL;

// add report
export const addReport = async (payload) => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/add-report`, payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// get all reports
export const getAllReports = async (filters) => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/get-all-reports` , filters);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
} 

// get all reports by user
export const getAllReportsByUser = async () => {
    try {
        const response = await axiosInstance.post(`${apiUrl}/api/users/get-all-reports-by-user`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}