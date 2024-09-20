const { default: axiosInstance } = require(".");

const apiUrl = import.meta.env.NEXT_PUBLIC_API_BASE_URL;

export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/api/exams/add`, payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/api/exams/get-all-exams`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get exam by id

export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/get-exam-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// edit exam by id

export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/edit-exam-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete exam by id

export const deleteExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/delete-exam-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// add question to exam

export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/add-question-to-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/edit-question-in-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${apiUrl}/api/exams/delete-question-in-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
