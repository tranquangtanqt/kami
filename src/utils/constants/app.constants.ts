// import * as dotenv from "dotenv";

// dotenv.config();
// const CONFIG_ENV = process.env;

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const APP = {
  PUBLIC_URL: env.PUBLIC_URL,
};
