import axiosApi from "../config/axios.config";
/**
 * PUT timezone by name
 * @param {string} [name] the name of the timezone to show
 *
 */
const putTimezoneByName = (name) => {
  const parsedName = encodeURIComponent(name); //because the name includes '/';
  return axiosApi({
    method: "PUT",
    url: `/timezones/${parsedName}`
  });
};

export default putTimezoneByName;
