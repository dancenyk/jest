let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

function resetProducts (){
    products = [];
    id = 0; 
}


/* Esta función addProduct recibe dos parámetros: el nombre del producto y el precio. 
Si alguno de los dos parámetros no está definido, la función lanzará un error. 
Si el producto ya existe, la función también lanzará un error. */
function addProduct (name, price) {

    if(name ===undefined || price === undefined ){
        throw new Error('Please, introduce name and price');
      }

    const existingProduct = products.find(product => product.name === name);
      if(existingProduct){
          throw new Error('This product exists');
      }
    
    const newProduct = {
        name: name,
        price: price,
        id: id++
      }
    products.push(newProduct);
    return newProduct;
}


function removeProduct (id) {
  const existingProduct = products.find(product => product.id === id);
  if(!existingProduct){
    throw new Error('This product do not exists');
  }
    
  }


module.exports = { 
    resetProducts, 
    addProduct, 
    removeProduct, 
    getProducts, 
    getProduct, 
    updateProduct
};