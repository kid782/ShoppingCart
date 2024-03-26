import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { RangeHolder, RangeItem } from "./RangeFilter.styled";

const RangeFilter = ({queryParams, setQueryParams, minAndMax, rangeValue, setRangeValue}) => {
	const rangeRef = useRef(minAndMax);
	const rangeParam = queryParams.get('range');

	const handleMinRangeFilter = (e) => {
		const newMin = +e.target.value;
		setRangeValue((prevState) => {
			return {
				max: newMin >= prevState.max ? newMin : prevState.max,
				min: newMin
			}
		});
		rangeRef.current.min = newMin;
		setQueryParams((queryParams) => {
			const newQueryParams = queryParams;
			newQueryParams.set("range", `${rangeRef.current.min}-${rangeRef.current.max}`);
			return newQueryParams;
		})
	}

	const handleMaxRangeFilter = (e) => {
		const newMax = +e.target.value;
		setRangeValue((prevState) => {
			return {
				min: newMax <= prevState.min ? newMax : prevState.min,
				max: newMax,
			}
		});
		rangeRef.current.max = newMax;
		setQueryParams((queryParams) => {
			const newQueryParams = queryParams;
			newQueryParams.set("range", `${rangeRef.current.min}-${rangeRef.current.max}`);
			return newQueryParams;
		})
	}

	useEffect(() => {
		if (rangeParam) {
			const [min, max] = rangeParam.split('-');
			setRangeValue({min: +min, max: +max});
		}
	}, [rangeParam]);

	return (
		<RangeHolder>
			<RangeItem>
				<span>Min price</span>
				<input onChange={handleMinRangeFilter} type="range" min={minAndMax.min} max={minAndMax.max} value={rangeValue.min} step="0.1" />
				<span>{rangeValue.min}$</span>
			</RangeItem>
			<RangeItem>
				<span>Max price</span>
				<input onChange={handleMaxRangeFilter} type="range" min={minAndMax.min} max={minAndMax.max} value={rangeValue.max} step="0.1" />
				<span>{rangeValue.max}$</span>
			</RangeItem>
		</RangeHolder>
	)
}

RangeFilter.propTypes = {
	rangeValue: PropTypes.shape({
		min: PropTypes.number,
		max: PropTypes.number
	}).isRequired,
	setRangeValue: PropTypes.func.isRequired,
	minAndMax: PropTypes.shape({
		min: PropTypes.number,
		max: PropTypes.number
	}).isRequired,
	setQueryParams: PropTypes.func.isRequired
}

export default RangeFilter;