
import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly productsBtn: Locator;
  readonly firstViewProductBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('img[alt="Website for automation practice"]');
    this.productsBtn = page.locator('a[href="/products"]');
    this.firstViewProductBtn = page.locator('a[href="/product_details/1"]');
  }

  async navigate() {
    await this.page.goto('http://automationexercise.com');
  }

  async goToProducts() {
    await this.productsBtn.click();
  }

  async viewFirstProduct() {
    await this.firstViewProductBtn.first().click();
  }
}
