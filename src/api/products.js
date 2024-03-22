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
	const queryParams = new URL(request.url).searchParams;
	const categoryParams = queryParams.get("category");
	const categories = await getAllCategories();
	if (categoryParams) {
		const productsByCategory = await getProductsByCategory(categoryParams);
		return {
			categories, products: productsByCategory
		}
	} else {
		return { categories, products: await getAllProducts()}
	}
}

export async function getAllCategories() {
	return getData(ALL_CATEGORIES_URL);
}