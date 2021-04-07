import envConfig from "../../auth";

export default async function handler(req, res) {
  try {
    const response = await get(envConfig.vector.autoRebalanceUrl, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        adminToken: envConfig.vector.adminToken,
      }),
    });
    if(response.message === "success") {
      return res.send(200);
    }
    res.send(400);
  } catch(e) {
    res.send(500)
  }
}

function get(url, options) { 
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url, options);
      let body = '';
 
      response.body.on('data', (d) => {
        body += d;
      });
 
      response.body.on('end', ()=> {
        resolve(JSON.parse(body));
      });
    });
}