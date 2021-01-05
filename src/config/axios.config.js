import axios from "axios";
import config from "../config";

const BASE_URL = `${config.serverURL}`;

const axiosConfig = axios.create({
  baseURL: BASE_URL
});

export default axiosConfig;
