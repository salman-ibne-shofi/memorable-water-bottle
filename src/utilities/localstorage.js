const getStoredCart = () => {
	const storedCartString = localStorage.getItem("cart");
	if (storedCartString) {
		return JSON.parse(storedCartString);
	}
	return [];
};

const saveCartToLs = (cart) => {
	const cartStringified = JSON.stringify(cart);
	localStorage.setItem("cart", cartStringified);
};

const addTols = (id) => {
	const cart = getStoredCart();
	cart.push(id);
	// save to local storage
	saveCartToLs(cart);
};

export { addTols };
