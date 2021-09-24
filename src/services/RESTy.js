import request from 'superagent';

export default async function restyCalls(method, url, data) {
  if(method === 'GET') {
    const { body } = await request.get(url);
    return body;
  } else if(method === 'POST') {
    const { body } = await request.post(url).set(data);
    return body;
  } else if(method === 'PUT') {
    const { body } = await request.put(url).send(data);
    return body;
  } else if(method === 'DELETE') {
    const { body } = await request.delete(url);
    return body;
  }
}
