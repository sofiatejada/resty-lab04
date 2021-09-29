// import request from 'superagent';

// export default async function restyCalls(method, url, data) {
//   if(method == 'GET') {
//     const { body } = await request.get(url);
//     return body;
//   }
//   if(method == 'POST') {
//     const { body } = await request.post(url).send(data);
//     return body;
//   } 
//   if(method == 'PUT') {
//     const { body } = await request.put(url).send(data);
//     return body;
//   }
//   if(method == 'DELETE') {
//     const { body } = await request.delete(url);
//     return body;
//   }
// }

export const restyCalls = (method, url, data) => {
  if(method !== 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    }).then((res) => res.json());
  } else {
    return fetch(url, { method }).then((res) => res.json());
  }
};
