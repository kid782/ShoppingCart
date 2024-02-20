import CartIcon from "../Icons/CartIcon"
import { CartHolder, CartCounter } from "./Cart.styled";

const Cart = () => {
	return (
		<CartHolder>
			<button>
				<CartIcon />
			</button>
			<CartCounter>
				0
			</CartCounter>
		</CartHolder>
	)
}

export default Cart;