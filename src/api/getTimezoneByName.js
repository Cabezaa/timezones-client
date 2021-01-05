import axiosApi from "../config/axios.config";
/**
 * GET timezone by name from the server with date and time
 * @param {string} [name] the name of the timezone to get
 *
 */
const getTimezoneByName = (name) => {
  const parsedName = encodeURIComponent(name); //because the name includes '/';
  return axiosApi({
    method: "GET",
    url: `/timezones/${parsedName}`
  });
};

export default getTimezoneByName;
