import Axios from 'axios';
import { GLOBAL_API_DOMAIN } from './config';

const instance = Axios.create();
Axios.defaults.baseURL = GLOBAL_API_DOMAIN;

// if (Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN')) {
//     axios.defaults.headers.common['Authorization'] = Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN').accessToken
// }

export default Axios