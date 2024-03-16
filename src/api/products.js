import { getData, getFiveRandom } from "../helpers/helpers";

const BASE_URL = "https://fakestoreapi.com/products/";
const CATEGORY_BASE_URL = `${BASE_URL}/category/`;

export async function getProductsByCategory(category) {
	const url = `${CATEGORY_BASE_URL}${category}`;
	return getData(url);
}

export async function getAllProducts() {
	return getData(BASE_URL);
}

export async function getHomepageData() {
	const dummyProducts = await getAllProducts();
	const productsOnSale = getFiveRandom(dummyProducts);
	const popularProducts = getFiveRandom(dummyProducts);
	return { productsOnSale, popularProducts }
}