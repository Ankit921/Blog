const BASE_URL = "https://mern-blog-app-yfsk.onrender.com";

export const request = async (
  url,
  method,
  headers = {},
  body = {},
  isNotStringified = false,
  includeCredentials = true
) => {
  let res;
  let data;

if (includeCredentials) {
  headers = { ...headers, credentials: 'include' };
}

  switch (method) {
    case "GET":
      res = await fetch(BASE_URL + url, { headers });
      data = await res.json();
      return data;

    case "POST":
      
      if (isNotStringified) {
        res = await fetch(BASE_URL + url, { headers, method, body });
        data = await res.json();
      } else {
        res = await fetch(BASE_URL + url, {
          headers,
          method,
          body: JSON.stringify({ ...body }),
        
        });
        data = await res.json();
      }
      return data;

    case "PUT":
      res = await fetch(BASE_URL + url, {
        headers,
        method,
        body: JSON.stringify({ ...body }),
      });
      data = await res.json();
      return data;

    case "DELETE":
      res = await fetch(BASE_URL + url, { headers, method });
      data = await res.json();
      return data;
    default:
      return;
  }
};
