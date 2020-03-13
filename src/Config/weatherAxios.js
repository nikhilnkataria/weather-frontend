import axios from 'axios';
import getEnvironmentVariables from './config';

// eslint-disable-next-line import/no-mutable-exports
let weatherAxios;
try {
  weatherAxios = axios.create({
    baseURL: getEnvironmentVariables().apiUrl,
    timeout: 20000,
    headers: { 'Content-Type': 'application/json' }
  });

  weatherAxios.interceptors.response.use(
    (response) => {
      return response.data;
    }
    // (error) => {
    //   if (error.code === 'ECONNABORTED') {
    //     store.dispatch(
    //       showDangerAlert({
    //         txt: `Network Timeout Error Occured.
    //           Please try again after some time.`,
    //         autoClose: true
    //       })
    //     );
    //   } else if (Utils.checkIfUnauthorisedError(error)) {
    //     store.dispatch(showLoggedOutModal());
    //   }
    //   // Return error
    //   return Promise.reject(error);
    // }
  );
} catch (error) {
  console.error('Error', error);
}

export default weatherAxios;
