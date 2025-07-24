const { faker } = require('@faker-js/faker')
    
    const productFactory = () => {
        var productData = {
            nome: 'Test ' + faker.commerce.productName(),
            preco: faker.number.int({ min: 50, max: 1000 }),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({ min: 1, max: 50 })
        }
        return productData
    }

module.exports = {
    productFactory
}