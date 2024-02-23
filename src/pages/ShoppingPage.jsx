import Header from "../components/header/Header";
import { Button } from "../style/shared/buttons";
import Footer from "../components/footer/Footer";
import Wrapper from "../components/wrapper/Wrapper";

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
