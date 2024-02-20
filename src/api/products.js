import { getData } from "../helpers/helpers";

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
