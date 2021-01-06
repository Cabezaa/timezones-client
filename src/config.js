const { REACT_APP_SERVER_URL, REACT_APP_AUTOREFRESH_INTERVAL } = process.env;

const config = {
  serverURL: REACT_APP_SERVER_URL,
  autoRefreshInterval: REACT_APP_AUTOREFRESH_INTERVAL || 5000
};

export default config;
