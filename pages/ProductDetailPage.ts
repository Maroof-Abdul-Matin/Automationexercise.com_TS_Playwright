
import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productInfo: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly viewCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productInfo = page.locator('.product-information');
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('button.cart');
    this.viewCartButton = page.locator('a[href="/view_cart"]');
  }

  async setQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async viewCart() {
    await this.page.locator('xpath=(//a[@href="/view_cart"])[2]').click();
  }
}
