import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartHolder, CartCounter, CartButton } from "./Cart.styled";

const Cart = () => {
	return (
		<CartHolder>
			<CartButton>
				<FontAwesomeIcon icon={faCartShopping} />
			</CartButton>
			<CartCounter>
				0
			</CartCounter>
		</CartHolder>
	)
}

export default Cart;