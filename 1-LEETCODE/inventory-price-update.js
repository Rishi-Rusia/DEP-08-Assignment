const products = [
    { id: 1, name: "Widget", price: 50, quantity: 120 },
    { id: 2, name: "Gadget", price: 30, quantity: 80 },
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 }
];

const updatedProducts = products.map(product => 
    product.quantity > 100 ? { ...product, price: product.price * 0.9 } : product
);

const discountedProducts = updatedProducts.filter(product => product.quantity > 100);

discountedProducts.forEach(product => 
    console.log(`Product: ${product.name}, New Price: $${product.price.toFixed(2)}`)
);
