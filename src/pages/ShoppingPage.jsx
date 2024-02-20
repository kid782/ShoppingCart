import Header from "../components/Header/Header";
import { Button } from "../style/shared/buttons";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/Footer/Footer";

const ShoppingPage = () => {
	return (
    <>
	<Header />
	<main>
		<Wrapper>
			<div>This is the Shopping page</div>
			<Button>Click here</Button>
		</Wrapper>
	</main>
	<Footer />
    </>
	);
};

export default ShoppingPage;
