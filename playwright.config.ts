
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['line'], ['allure-playwright']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],headless: false, },
    },
    //{
    //  name: 'firefox',
    //  use: { ...devices['Desktop Firefox'],headless: false, },
   // },
   
{
  name: 'webkit',
  use: {
    ...devices['Desktop Safari'],
    headless: false,
  },

}
  ],
});
