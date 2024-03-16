import { stores } from "./data";
import { FooterHeading, FooterItem, FooterText } from "../../Footer.styled";
import { OurStoresHolder } from "./OurStores.styled";

const OurStores = () => {
	return (
		<OurStoresHolder>
			<FooterHeading>Our Stores</FooterHeading>
			{stores.length &&
			<div>
				{stores.map(store => (
					<FooterItem as="address" key={store.id}>
						<FooterText as="span">{store.street}</FooterText>
						<FooterText as="span">{`${store.city}, ${store.zipCode}`}</FooterText>
						<FooterText as="span" $bold>{store.phoneNumber}</FooterText>
					</FooterItem>
				))}
			</div>}
		</OurStoresHolder>
	);
}

export default OurStores;