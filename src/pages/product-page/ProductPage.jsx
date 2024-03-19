import { useLoaderData } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";

const ProductPage = () => {
	const { productName } = useLoaderData();
	return (
		<div>
			<Wrapper>
				<p>
					Product page <span style={{fontWeight: "bold"}}>{productName}</span>
				</p>
			</Wrapper>
		</div>
	);
};

export default ProductPage;
