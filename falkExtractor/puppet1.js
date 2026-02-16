const { getAllEpisodeTitles } = require("./test.js");
const puppeteer = require("puppeteer-extra");
const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
const path = require("path");


const timeout = 1000 * 60 * 30;

const downloadDir = path.join(__dirname, "downloadDir");

const delayExecutionFor = (sleepFor) =>
  new Promise((resolve) => setTimeout(resolve, sleepFor));


(async () => {
  const episodes = await getAllEpisodeTitles();
  const chromeBrowser = {
    browserURL: "http://127.0.0.1:9222",
    defaultViewport: null,
    protocolTimeout: timeout,
    headless: false,
  };

  const browser = await puppeteer.connect(chromeBrowser);

  const download = async (episode) => {
    const episodeFile = `${episode.replaceAll(" ", "_")}.mp4`;
    const filePath = path.join(downloadDir, episodeFile);
    console.log(
      filePath,
      fs.existsSync(filePath) || fs.existsSync(`${filePath}.crdownload`),
    );
    if (fs.existsSync(filePath) || fs.existsSync(`${filePath}.crdownload`))
      return;

    const page = await browser.newPage();
    page.setDefaultTimeout(timeout);

    const client = await page.target().createCDPSession();

    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: downloadDir,
    });

    await page.goto("https://www.ardmediathek.de/");

    await page.setViewport({ width: 1024, height: 1024 });

    const findSuche = await page.locator('[aria-label="Suche"]').waitHandle();

    await findSuche?.click();

    const sucheInput = await page.locator("#SearchInputWidget").waitHandle();
    await sucheInput?.click();

    await page.keyboard.type(`Falk ${episode}`, { delay: 50 });

    await page.keyboard.press("Enter", { delay: 50 });

    const titleVideo = await page.locator(".b1ja19fa.h1oki4ga").waitHandle();
    await titleVideo?.click();

    await delayExecutionFor(1000);
    const videoSettings = await page
      .locator(
        'button[class="ardplayer-button-settings ardplayer-icon ardplayer-icon-settings ardplayer-icon-settings-hd"]' +
          '[data-initiator-name="addon-button(SettingsSheetAddon:settings)"]' +
          '[tabindex="0"]' +
          '[title="Einstellungen an / aus"]' +
          '[data-display-title="Einstellungen"]' +
          '[aria-pressed="false"]' +
          '[aria-label="Einstellungen an / aus"]',
      )
      .waitHandle();

    await delayExecutionFor(1000);
    await videoSettings?.click();

    await page
      .locator(
        "span" +
          '[tabindex="0"]' +
          '[role="option"]' +
          '[data-index="4"]' +
          '[data-initiator-name="select(Qualität)=>HD 1080p"]',
        //'[aria-selected="false"]',
      )
      ?.click();

    const videoSelector = await page
      .locator('source[type="video/mp4"]')
      .waitHandle();

    const videoSRC = await videoSelector?.evaluate((el) => el.src);

    await page.goto(videoSRC, { waitUntil: "networkidle2" });

    await page.evaluate(
      (url, episodeFile) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = episodeFile;
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
      videoSRC,
      episodeFile,
    );

    await page.close();
    console.log(`Completed: ${episode}`);
  };

  //await download(episodes[0]);
  for (const episode of episodes) {
    await download(episode);
  }
})();
