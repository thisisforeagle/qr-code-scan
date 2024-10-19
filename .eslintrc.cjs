module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    NDEFReader: "readonly",
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/no-unused-vars": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
