import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import { Button } from "../style/shared/buttons";
import Footer from "../components/Footer/Footer";

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
