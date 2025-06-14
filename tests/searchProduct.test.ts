
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { TestDataManager } from '../utils/testDataManager';

test.describe('Search Product Test', () => {
  let productName: string;

  test.beforeAll(() => {
    const testData = TestDataManager.generateTestData();
    productName = testData.productName;
  });

  test('Search for a product', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.navigate();
    await expect(home.logo).toBeVisible();

    await home.goToProducts();
    await expect(products.productsTitle).toBeVisible();

    await products.searchProduct(productName);
    await expect(products.searchResultsTitle).toContainText('Searched Products');
    await expect(products.productList).toBeVisible();
  });

  test.afterAll(() => {
    TestDataManager.cleanupTestData();
  });
});
