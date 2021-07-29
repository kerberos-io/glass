const { hostname } = window.location;
const { protocol } = window.location;

const dev = {
  ENV: "dev",
  HOSTNAME: hostname,
  API_URL: `${protocol}//${hostname}:8082/`,
};

const env = window["env"];
const prod = {
  ENV: "prod",
  HOSTNAME: hostname,
  API_URL:
    env && env["apiUrl"] !== ""
      ? `${protocol}//${window["env"]["apiUrl"]}/`
      : `${protocol}//${hostname}/`,
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  // Add common config values here
  // MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
