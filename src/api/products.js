import { getData, getFiveRandom } from "../helpers/helpers";

export async function getMensClothing() {
  return getData("https://fakestoreapi.com/products/category/men's clothing");
}

export async function getWomensClothing() {
  return getData("https://fakestoreapi.com/products/category/women's clothing");
}

export async function getElectronics() {
  return getData("https://fakestoreapi.com/products/category/electronics");
}

export async function getJewlery() {
  return getData("https://fakestoreapi.com/products/category/jewelery");
}

export async function getHomepageData() {
	const productsOnSale = await getData("https://fakestoreapi.com/products/category/men's clothing");
	const popularProductsRes = await getData("https://fakestoreapi.com/products");
	const popularProducts = getFiveRandom(popularProductsRes);
	return { productsOnSale, popularProducts }
	// const resLen = await response && response.length - 1;
	// return { discount : getMensClothing(), popular : response.toSpliced(5, resLen) }
}