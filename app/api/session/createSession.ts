import axios from '../axios';
import createHeader from '../createHeader';

export default async function createSession(data): Promise<any> {
  const url = '/v1/sessions';

  try {
    console.log('api');
    const response = await axios.post(url, data, {
      ...createHeader(),
    });

    console.log('response', response);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error.message);
  }
}
