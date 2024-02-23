import Header from "../components/header/Header";
import Wrapper from "../components/wrapper/Wrapper";
import { Button } from "../style/shared/buttons";
import Footer from "../components/footer/Footer";

const Homepage = () => {
	return (
    <>
		<Header />
		<main>
			<Wrapper>
				<div>This is the Homepage</div>
				<Button>Click here</Button>
			</Wrapper>
		</main>
		<Footer />
    </>
	);
};

export default Homepage;
