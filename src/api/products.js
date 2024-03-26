import { getData, getFiveRandom } from "../helpers/helpers";

const BASE_URL = "https://fakestoreapi.com/products/";
const ALL_CATEGORIES_URL = `${BASE_URL}/categories`;
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

export async function getShoppingPageData({request}) {
	const queryParams = new URL(request.url).searchParams.entries();
	const categories = await getAllCategories();
	let products = await getAllProducts();

	for (const [param, value] of queryParams) {
		if (param === 'category') {
			products = await getProductsByCategory(value);
		}
		if (param === 'search') {
			products = products.filter(item =>
				item.title.toLowerCase().includes(value)
			);
		}
		if (param === 'range') {
			const [min, max] = value.split('-');
			products = products.filter(product => {
				const currentPrice = +product.price;
				return currentPrice <= +max && currentPrice >= +min
			})
		}
	}

	return { categories, products }
}

export async function getAllCategories() {
	return getData(ALL_CATEGORIES_URL);
}