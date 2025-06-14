
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { TestDataManager } from '../utils/testDataManager';

test.describe('Add product to Cart and Verify info Test', () => {
  let quantity: number;

  test.beforeAll(() => {
    const testData = TestDataManager.generateTestData();
    quantity = testData.quantity;
  });

test('Add product with quantity to cart', async ({ page }) => {
  const home = new HomePage(page);
  const productDetail = new ProductDetailPage(page);
  const cart = new CartPage(page);

  await home.navigate();
  await expect(home.logo).toBeVisible();

  await home.viewFirstProduct();
  await expect(productDetail.productInfo).toBeVisible();

  await productDetail.setQuantity(quantity);
  await productDetail.addToCart();
  await productDetail.viewCart();

 // await expect(cart.productQuantity).toHaveText('4');
  await expect(cart.productQuantity).toHaveText(quantity.toString());

  });

test.afterAll(() => {
   TestDataManager.cleanupTestData();
  });


});