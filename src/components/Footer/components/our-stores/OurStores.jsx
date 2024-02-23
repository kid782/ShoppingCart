import { stores } from "./data";
import { FooterHeading, FooterItem } from "../../Footer.styled";
import { OurStoresHolder, AddressItem } from "./OurStores.styled";

const OurStores = () => {
	return (
		<OurStoresHolder>
			<FooterHeading>Our Stores</FooterHeading>
			{stores.length &&
			<div>
				{stores.map(store => (
					<address key={store.id}>
						<AddressItem>{store.street}</AddressItem>
						<AddressItem>{`${store.city}, ${store.zipCode}`}</AddressItem>
						<AddressItem $bold>{store.phoneNumber}</AddressItem>
					</address>
				))}
			</div>}
		</OurStoresHolder>
	);
}

export default OurStores;