const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

describe("addProduct", () =>{
    beforeEach(() => {
        resetProducts();
    })

    it("should throw an error if name or price are not defined", () =>  {
        expect(() => addProduct('pera')).toThrow('Please, introduce name and price');
    })

    it("should throw an error if product exist ", () =>{
        addProduct("manzana", 3);
        expect(() => addProduct('manzana', 3)).toThrow('This product exists');
    })

    it("should add a product", () =>{
        expect(addProduct("uva", 3)).toStrictEqual({
            id:0,
            name:"uva",
            price:3
        })
    })
    })


/*

de la documenatcion para textear objetos 
test('asignación de un objeto', () => {
    const datos = {uno: 1};
    datos['dos'] = 2;
    expect(datos).toStrictEqual({uno: 1, dos: 2});
  });

  */





/*Antes de cada test, reiniciaremos los productos para garantizar la independencia de los test. Puedes añadir un bloque beforeEach para resetear los productos antes de cada test.

beforeEach(() => {
    resetProducts();
});


//Nota: También podríamos reiniciar los productos después de cada test en lugar de antes de cada test. Para eso, podemos usar el bloque afterEach
afterEach(() => {
    resetProducts();
});

*/