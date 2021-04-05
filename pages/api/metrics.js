import promparse from "@yolean/promparse"
import envConfig from "../../auth";


export default async function handler(req, res) {
    const scrape = await fetch(envConfig.metrics.url);
    const parsed = promparse(await scrape.text());
    res.json(parsed);
  }
  