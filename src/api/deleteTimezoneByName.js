import axiosApi from "../config/axios.config";
/**
 * DELETE timezone by name
 * @param {string} [name] the name of the timezone to delete
 *
 */
const deleteTimezoneByName = (name) => {
  const parsedName = encodeURIComponent(name); //because the name includes '/';
  return axiosApi({
    method: "DELETE",
    url: `/timezones/${parsedName}`
  });
};

export default deleteTimezoneByName;
