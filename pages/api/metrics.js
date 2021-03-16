import promparse from "@yolean/promparse"

const METRICS_URL = process.env.METRICS_URL;
console.log("Using metrics URL ", METRICS_URL);

export default async function handler(req, res) {
    const scrape = await fetch(METRICS_URL);
    const parsed = promparse(await scrape.text());
    res.status(200).json(parsed)
  }
  