const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("make sure the draw button works", async () => {
    await driver.get("http://localhost:8000");

    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    const choicesDiv = await driver.findElement(By.id("choices"));
    const isDisplayed = await choicesDiv.isDisplayed();

    expect(isDisplayed).toBe(true);
  });
  test('when a bot is "Removed from Duo", it goes back to the choices div', async () => {
    await driver.get('http://localhost:8000'); 

    const drawButton = await driver.findElement(By.id('draw'));
    await drawButton.click();

    const addToDuoButton = await driver.findElement(By.className('bot-btn'));
    await addToDuoButton.click();

    const removeFromDuoButton = await driver.findElement(By.className('bot-btn'));
    await removeFromDuoButton.click();

    const choicesDiv = await driver.findElement(By.id('choices'));
    const isDisplayed = await choicesDiv.isDisplayed();

    expect(isDisplayed).toBe(true);
  });
});