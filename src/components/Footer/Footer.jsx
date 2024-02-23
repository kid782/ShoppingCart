import Wrapper from "../wrapper/Wrapper";
import OurStores from "./components/our-stores/OurStores";
import { FooterHolder, FooterBottom, FooterTop } from "./Footer.styled";

const Footer = () => {
	return (
		<FooterHolder>
			<Wrapper>
				<FooterTop>
					<OurStores />
				</FooterTop>
				<FooterBottom>
					Copyright
				</FooterBottom>
			</Wrapper>
		</FooterHolder>
	)
}

export default Footer;