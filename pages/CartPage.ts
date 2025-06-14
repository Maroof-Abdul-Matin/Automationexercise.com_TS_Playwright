
import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly productQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productQuantity = page.locator('xpath=//button[@class="disabled"]');
  }
}
