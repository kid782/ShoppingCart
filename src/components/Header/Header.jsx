import Navigation from "../Navigation/Navigation";
import Wrapper from "../Wrapper/Wrapper";
import { HeaderHolder } from "./Header.styled";

const Header = () => {
	return (
		<HeaderHolder>
			<Wrapper>
				<Navigation />
			</Wrapper>
		</HeaderHolder>
	);
};

export default Header;
