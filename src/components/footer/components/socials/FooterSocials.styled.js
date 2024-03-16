import { styled } from "styled-components";
import { mediaDown } from "../../../../style/abstracts/breakpoints";

export const FooterSocialsHolder = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	@media ${mediaDown.md} {
		margin-top: 10px;
	}
`