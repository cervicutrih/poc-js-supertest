const request = require('supertest')

const getToken = async (email, password) => {
    const loginResponse = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send({
            'email': email,
            'password': password
        })

    return loginResponse.body.authorization
}

module.exports = {
    getToken
}