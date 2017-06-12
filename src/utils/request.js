import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
 export default async function request(action, payload) {
   let url = "";
  //  const env = config.env();
   //根据环境切换请求url
   url = `${action}`;
  //  console.log('uri = ', url);
   //按需添加公共字段
   const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(payload)
   }
   const response = await fetch(url, options);

   checkStatus(response);

   const data = await response.json();
   return {data};
 }