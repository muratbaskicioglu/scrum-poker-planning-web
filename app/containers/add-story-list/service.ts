import createSession from 'api/session/createSession';

export async function newSession(data): Promise<boolean> {
  console.log('service');
  return createSession(data);
}
