const request = require('supertest')
const express = require('express')

const register = require('../src/controllers/auth/register')
const { newUser } = require('../_mock/mock_data')

const app = express()
app.post('/api/auth/signup', register)

describe('Register', function () {

  beforeAll(() => () => app.listen(3000));

  test('resolve registration',  async function() {
    const response = await request(app)
      .post('/api/auth/signup')
      .send(newUser)
      .set('Accept', 'application/json')


    expect(response.headers["Content-Type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body.email).toEqual('demo@minimals.cc')
    expect(function(res) {
      console.log(res)})
  // expect(200, {email: 'demo@minimals.cc', subscription: 'starter'})
   // expect(response.status).toBe(200)
  });

  test('reject registration', () => {
    request(app)
      .post('/auth/signup')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {"message": "error message"})
  });
})
