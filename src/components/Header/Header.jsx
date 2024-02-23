import Navigation from "../navigation/Navigation";
import Wrapper from "../wrapper/Wrapper";
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
