import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Test del Router Adoptions', () => {

    it('Debe obtener todas las adopciones', async () => {
        const response = await requester.get('/api/adoptions');
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('payload');
    });

    it('Debe devolver error si adopción no existe', async () => {
        const response = await requester.get('/api/adoptions/123');
        expect(response.status).to.equal(404);
    });

    it('Debe crear una adopción correctamente', async () => {
        const response = await requester.post('/api/adoptions/USER_ID/PET_ID');
        expect(response.status).to.equal(200);
    });

});
