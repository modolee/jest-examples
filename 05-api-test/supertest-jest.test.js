import request from 'supertest'
import app from './app';

describe('End-to-End Test', () => {
  describe('GET /user', () => {
    test('responds with json', async () => {
      const res = await request(app)
        .get('/user')
        .set('Accept', 'application/json');

      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toMatch('/json');
      expect(res.body).toEqual({ name: 'modolee' });
    });
  });

  describe('POST /user', () => {
    test('responds with name in json', async () => {
      const res = await request(app)
        .post('/user')
        .set('Accept', 'application/json')
        .type('application/json')
        .send({ name: 'modolee' })

      expect(res.status).toBe(201);
      expect(res.headers['content-type']).toMatch('/json');
      expect(res.body).toEqual({ name: 'modolee' });
    });
  });
});