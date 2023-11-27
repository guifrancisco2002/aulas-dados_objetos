// let invoice = {
//     name: "Guilherme",
//     age: 21,
//     products: ["Razer Deathadder", "Razer Kraken", "Razer Blackwidow"],
//     productsValues: [149.90, 299.90, 499,90]
// }

// console.log(invoice)

// let invoice = {
// 	name: "Guilherme Rodrigues Francisco",
// 	age: 21,
// 	products: {
// 		0: ["Razer Deathadder", 149.90],
// 		1: ["Razer Kraken", 299.90],
// 		3: ["Razer Blackwidow", 499.90]
// 	}
// }

// console.log(invoice.products)

let invoice = {
	name: "Guilherme Rodrigues Francisco",
	age: 21,
	products: {
		0: ["Razer Deathadder", 149.90],
		1: ["Razer Kraken", 299.90],
		3: ["Razer Blackwidow", 499.90]
	}
}

function generateInvoice(invoice){
	console.log(`O comprador é > ${invoice.name}`)
	console.log(`A idade é > ${invoice.age}`)

	for(let index in invoice.products){
		let [productName, productPrice] = invoice.products[index] 
		console.log(`- ${productName} ${productPrice}`)
	}
}

generateInvoice(invoice)