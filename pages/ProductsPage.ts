
import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly searchResultsTitle: Locator;
  readonly productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.locator('xpath=//*[@class="title text-center"]');
    this.searchBox = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchResultsTitle = page.locator('.features_items > h2');
      this.productList = page.locator('xpath=(//*[@class="productinfo text-center"])[1]');
  }

  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchButton.click();
  }
}
