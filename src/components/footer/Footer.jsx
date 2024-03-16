import Wrapper from "../wrapper/Wrapper";
import OurStores from "./components/our-stores/OurStores";
import BlogPosts from "./components/blog-posts/BlogPosts";
import Support from "./components/support/Support";
import FooterSocials from "./components/socials/FooterSocials";
import { FooterHolder, FooterBottom, FooterTop } from "./Footer.styled";

const Footer = () => {
	return (
		<FooterHolder>
			<Wrapper>
				<FooterTop>
					<OurStores />
					<BlogPosts />
					<Support />
				</FooterTop>
				<FooterBottom>
					<span>
						&#169; Copyright 2024 Stefan Beljin - All Rights Reserved
					</span>
					<FooterSocials />
				</FooterBottom>
			</Wrapper>
		</FooterHolder>
	)
}

export default Footer;