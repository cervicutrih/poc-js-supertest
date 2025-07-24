const request = require('supertest')
const { expect } = require('chai')
const { getToken } = require('../../helpers/auth')
require('dotenv').config()
const { productFactory } = require('../../factories/product')

describe('Products', () => {
    describe('POST /products', () => {
        let token

        before(async ()  => {
            token = await getToken(process.env.email, process.env.password)
            console.log(token)
        })

        it('Verify successful creation of a new product', async () => { 
            //const bodyProducts = { ...productFactory } //shalow copy
            const productData = productFactory()
            const newProductResponse = await request(process.env.BASE_URL)
                .post('/produtos')
                .set('Authorization', token)
                .set('Content-type', 'application/json')
                .send(
                    productData
                )
            console.log(productData)
            expect(newProductResponse.status).to.equal(201)
        })

    })
})