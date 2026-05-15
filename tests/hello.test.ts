import request from 'supertest';
import app from '../src/app';

describe('GET /hello', () => {
    it('should return status 200 and hello message', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'Hello, World!' });
    });
});