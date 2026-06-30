// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout:40*1000,
  reporter:"html",
  retries:3,
  expect:{
    timeout:50*1000,
  },
 projects:[{
  name:"chrome",
use: {
  browserName:"chromium",
   headless:false,
   screenshot:"on-first-failure",
   video:"retain-on-failure",
   trace:"retain-on-failure",
   //viewport:{width:700,height:500}
  ...devices["Desktop Chrome"]
  }, 
},
{
  name:"safari_project",
use: {
  browserName:"firefox",
   headless:false,
   screenshot:"on-first-failure",
   video:"retain-on-failure",
   trace:"retain-on-failure",
   //viewport:{width:700,height:500}
  ...devices["Desktop Safari"]
}}
]
  


});
