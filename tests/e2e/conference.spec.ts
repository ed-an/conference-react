import { expect, test } from '@playwright/test'

test('presents the full conference journey without horizontal overflow', async ({ page }, testInfo) => {
  await page.goto('./')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ideias que movem a web.')
  await expect(page.getByText('12 de dezembro de 2026').first()).toBeVisible()
  await expect(page.locator('#palestrantes article')).toHaveCount(8)
  await expect(page.getByRole('heading', { name: 'Tudo para chegar e aproveitar.' })).toBeVisible()

  const ticket = page.getByRole('link', { name: /Garantir meu ingresso — abre em nova aba/ }).first()
  await expect(ticket).toHaveAttribute('href', 'https://www.register.com.br/evento/14527')
  await expect(ticket).toHaveAttribute('target', '_blank')
  await expect(ticket).toHaveAttribute('rel', 'noopener noreferrer')

  const sizes = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }))
  expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.clientWidth)

  await page.screenshot({
    path: testInfo.outputPath('homepage.png'),
    fullPage: true,
  })
})

test('keeps anchor navigation connected to visible sections', async ({ page }) => {
  await page.goto('./')

  await page.getByRole('link', { name: 'Palestrantes', exact: true }).click()
  await expect(page.locator('#palestrantes')).toBeInViewport()

  await page.getByRole('link', { name: 'Informações', exact: true }).click()
  await expect(page.locator('#informacoes')).toBeInViewport()
})

test('offers a keyboard skip link and visible focus', async ({ page }) => {
  await page.goto('./')
  await page.keyboard.press('Tab')

  const skipLink = page.getByRole('link', { name: 'Pular para o conteúdo principal' })
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#conteudo-principal$/)
})
