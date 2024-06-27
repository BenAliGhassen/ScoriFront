import axiosCSRF from "../Axios/NewAxios"


export const ShowRanking = async () => {
    try {
      const response = await axiosCSRF.get('/ranking');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching ranking:', error);
      throw error;
    }
  };