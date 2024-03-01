import { FooterHeading, FooterLink } from "../../Footer.styled";
import supportLinks from "./data";
import { SupportItems, SupportHolder } from "./Support.styled";

const Support = () => {
	return (
		<SupportHolder>
			<FooterHeading>Support</FooterHeading>
			<SupportItems>
			{supportLinks.map(item => (
				<FooterLink href={item.url} key={item.id}>
					{item.text}
				</FooterLink>
			))}
			</SupportItems>
		</SupportHolder>
	)
}

export default Support;