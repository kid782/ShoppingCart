import { useState } from "react";
import PropTypes from "prop-types";

import { productShape } from "../../../product/Product";
import { RangeHolder, RangeItem } from "./RangeFilter.styled";

const RangeFilter = ({initLoadProducts}) => {
	const minAndMax = () => {
		const minPriceProduct = initLoadProducts.reduce((prevVal, currentVal) => {
			return prevVal.price <= currentVal.price ? prevVal : currentVal;
		});
		const maxPriceProduct = initLoadProducts.reduce((prevVal, currentVal) => prevVal.price >= currentVal.price ? prevVal : currentVal);
		return { min: minPriceProduct.price, max: maxPriceProduct.price };
	};
	const [rangeValue, setRangeValue] = useState({min: minAndMax.min, max: minAndMax.max});

	const handleMinRangeFilter = (e) => {
		setRangeValue((prevState) => {
			const newMin = e.target.value;
			return {
				max: newMin >= prevState.max ? newMin : prevState.max,
				min: newMin
			}
		});
	}

	const handleMaxRangeFilter = (e) => {
		setRangeValue((prevState) => {
			const newMax = e.target.value;
			return {
				min: newMax <= prevState.min ? newMax : prevState.min,
				max: newMax,
			}
		});
	}

	return (
		<RangeHolder>
			<RangeItem>
				<span>Min price</span>
				<input onChange={handleMinRangeFilter} type="range" min={minAndMax.min} max={minAndMax.max} value={rangeValue.min} step="1" />
				<span>{rangeValue.min}$</span>
			</RangeItem>
			<RangeItem>
				<span>Max price</span>
				<input onChange={handleMaxRangeFilter} type="range" min={minAndMax.min} max={minAndMax.max} value={rangeValue.max} step="1" />
				<span>{rangeValue.max}$</span>
			</RangeItem>
		</RangeHolder>
	)
}

RangeFilter.propTypes = {
	initLoadProducts: PropTypes.arrayOf(productShape)
}

export default RangeFilter;