	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 10.00
	},
	{
		name: "yogurt",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 4.99
	},
	{
		name: "almond granola",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 2.00
	},
	{
		name: "milk",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 4.00
	},
	{
		name: "nutella",
		lactoseIntolerant: false,
		nutAllergy: false,
		organic: false,
		price: 5.00
	},
	{
		name: "chicken breast",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 6.99
	},
	{
		name: "banana",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "ice cream",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 5.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction1, restriction2, restriction3) {
	let product_names = [];
	prods.sort(function(a,b){return a.price - b.price});
	for (let i=0; i<prods.length; i+=1) {
		if(!(restriction1 && !prods[i].lactoseIntolerant) && !(restriction2 && !prods[i].nutAllergy) && !(restriction3 && !prods[i].organic)){
		product_names.push(prods[i].name + ", $" + prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1){
		totalPrice += parseFloat(chosenProducts[i].substring(chosenProducts[i].indexOf("$") + 1));
	}
	
	return totalPrice;
}
