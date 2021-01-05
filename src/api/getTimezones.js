import axiosApi from "../config/axios.config";
/**
 * GET timezones from the server
 *
 */
const getTimezones = () => {
  return axiosApi({
    method: "GET",
    url: `/timezones`
  });
};

export default getTimezones;
