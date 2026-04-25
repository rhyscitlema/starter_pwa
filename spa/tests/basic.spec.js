import { expect, test } from '@playwright/test';

test('Basic clicking of a button', async ({ page }) => {
	await page.goto('/');

	page.on('console', msg => {
		console.log(`BROWSER LOG: ${msg.type()} - ${msg.text()}`);
	});

	const button = page.locator('[data-i18n-text="Hello World!"]');
	await expect(button).toBeVisible();
	await button.click();
});
