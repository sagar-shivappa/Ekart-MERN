const getBasePath = (port) => {
  const PROXY_URI = process.env.VSCODE_PROXY_URI;
  if (!PROXY_URI) return "/";
  const proxyURL = PROXY_URI.replace("{{port}}", port);
  const intermediatePath = proxyURL.split("//")[1];
  const desiredPath = intermediatePath.substring(intermediatePath.indexOf("/"));
  return desiredPath;
};

module.exports = {
  // transform: {
  //     '^.+\\.js?$': 'babel-jest'
  // },
  testEnvironment: "jsdom",
  reporters: ["default", "jest-junit"],
  moduleNameMapper: {
    // Mocking CSS Modules
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  ci: true,
  globals: {
    // define all globals for test here
    BASE_PATH: getBasePath(3000),
  },
  transformIgnorePatterns: ["node_modules/(?!(@testing-library)/)"],
};
