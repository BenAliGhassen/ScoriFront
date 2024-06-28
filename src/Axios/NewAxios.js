import axios from 'axios';


const axiosCSRF = axios.create({
  baseURL: 'https://scorisever.azurewebsites.net',
  withCredentials: true, // Ensure cookies are sent with requests
});

const initializeAxiosCSRF = async () => {
  try {
    // Request CSRF cookie from server
    const response  = await axiosCSRF.get('/Csrf');


    // Set XSRF-TOKEN cookie
   const csrfToken = response.data.csrf_token;


    // Set X-CSRF-TOKEN header for Axios requests
    axiosCSRF.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;



  } catch (error) {
    console.error('Failed to initialize CSRF:', error);
  }
};

// Initialize CSRF handling
initializeAxiosCSRF();

export default axiosCSRF;
