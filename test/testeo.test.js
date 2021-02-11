const request = require('supertest');
const app = require('../index')


describe('RUTA DE LECTURA PARA EL CREAR EL GET DEL SERVIOR', () => {
    it('Esto deberia responder el get del servidor creado', done => {
        request(app)
            .get('/servidor')
            .set('Aceptar', 'aplicacion/json') //establecer cabeceras
            .expect(200, done) //responder el codigo de estado si esta todo correcto
    })
});
describe('RUTA DE LECTURA PARA EL CREAR EL POST DEL SERVIOR', () => {
    it('Esto deberia responder el posto del servidor creado', done => {
        request(app)
            .post('/aplicacion')
            .set('Aceptar', 'aplicacion/json') //establecer cabeceras
            .expect(200, done) //responder el codigo de estado si esta todo correcto
    })
});