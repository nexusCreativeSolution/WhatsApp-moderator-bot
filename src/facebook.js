const got = require("got");
const cheerio = require("cheerio");
  const downloaders = {
    dl5: async (url) => {
      const results = [];
      try {
        const response = await fetch("https://v3.fdownloader.net/api/ajaxSearch?lang=en", {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: `k_exp=1603655301&k_token=6d1f4543212539d8a9741972c04c4c9a8dd4a6462b36ca97f66faed8ce580bfe&q=${encodeURIComponent(url)}&lang=en&web=fdownloader.net&v=v2&w=`,
        });
        const data = await response.json();
        const $ = cheerio.load(data.data);
        $("#fbdownloader > div.tab-wrap > div > table > tbody > tr").each(function () {
          const quality = $(this).find(".video-quality").text();
          const downloadUrl = $(this).find("a").attr("href");
          if (downloadUrl) {
            results.push({ url: downloadUrl, quality });
          }
        });
      } catch (error) {
        console.error("Error in dl5:", error);
      }
      return results;
    },

    dl1: async (url) => {
      try {
        const response = await got.post("https://snapsave.app/action.php", {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/96.0.4664.110 Safari/537.36",
          },
          form: { url: encodeURI(url) },
        });
        const html = response.body;
        const $ = cheerio.load(html);
        const results = [];
        $("table.table > tbody > tr").each(function () {
          const cells = $(this).find("td");
          if (/tidak|no/i.test(cells.eq(1).text())) {
            const quality = cells.eq(0).text().split("(")?.[0]?.trim();
            const downloadUrl = cells.eq(2).find("a[href]").attr("href");
            if (downloadUrl) {
              results.push({ quality, url: downloadUrl });
            }
          }
        });
        return results;
      } catch (error) {
        console.error("Error in dl1:", error);
        return [];
      }
    },

    dl0: async (url) => {
      try {
        const response = await got.post("https://www.getfvid.com/downloader", {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
          },
          form: { url },
        });
        const $ = cheerio.load(response.body);
        const results = [];
        $("div.card > div.row > div").find(".btns-download > p > a[href]").each(function () {
          const downloadUrl = $(this).attr("href");
          const qualityText = $(this).text().trim();
          const isAudio = /audio/i.test(qualityText);
          const quality = isAudio ? "audio" : /Download in (\w+) Quality/i.exec(qualityText)?.[1];
          if (downloadUrl && quality !== "audio") {
            results.push({ url: downloadUrl, quality });
          }
        });
        return results;
      } catch (error) {
        console.error("Error in dl0:", error);
        return [];
      }
    },
  };

  exports.facebook = async (url) => {
    for (const downloader of Object.values(downloaders)) {
      const results = await downloader(url);
      if (results.length > 0) {
        return results;
      }
    }
    return [];
  };
