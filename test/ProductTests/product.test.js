const request = require('supertest')
const { expect } = require('chai')
const { getToken } = require('../../helpers/auth')
require('dotenv').config()
const { productFactory } = require('../../factories/product')

describe('Products', () => {
    describe('POST /products', () => {
        let token
        let productData

        before(async ()  => {
            token = await getToken(process.env.email, process.env.password)
        })

        beforeEach(() => {
            productData = productFactory()
        })

        it('Verify successful creation of a new product', async () => { 
            const newProductResponse = await request(process.env.BASE_URL)
                .post('/produtos')
                .set('Authorization', token)
                .set('Content-type', 'application/json')
                .send(
                    productData
                )
            expect(newProductResponse.status).to.equal(201)
        })

        it('Test to verify successful retrieval of a product by its ID', async () => {
            const newProductResponse = await request(process.env.BASE_URL)
                .post('/produtos')
                .set('Authorization', token)
                .set('Content-type', 'application/json')
                .send(
                    productData
                )
            expect(newProductResponse.status).to.equal(201)

            const retrievedProductResponse = await request(process.env.BASE_URL)
                .get(`/produtos/${newProductResponse.body._id}`)
                .set('Authorization', token)
                .set('Content-type', 'application/json')

            expect(retrievedProductResponse.status).to.equal(200)
            expect(retrievedProductResponse.body.nome).to.equal(productData.nome)

        })

    })
})