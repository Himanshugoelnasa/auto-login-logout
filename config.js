module.exports = {
  HRMS: {
    LOGIN_URL: 'your hrms portal url',
    DASHBOARD_URL: 'your hrms dashbaord url'
  },

  AUTH: {
    USERNAME: 'your usernname',
    PASSWORD: 'your password'
  },

  SELECTORS: {
    USERNAME: '#txtUsername',       // update if needed
    PASSWORD: '#txtPassword',       // update if needed
    LOGIN_BUTTON: '#btnLogin',
    PUNCH_BUTTON: '#switchLogout'
  },

  TIMING: {
    PAGE_LOAD_TIMEOUT: 30000,
    HUMAN_DELAY: 1500
  },

  BROWSER: {
    HEADLESS: false
  }
};
