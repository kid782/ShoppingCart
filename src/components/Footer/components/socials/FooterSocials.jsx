import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import socials from "./data";
import { FooterSocialsHolder } from "./FooterSocials.styled";

const FooterSocials = () => {
	const getSocialIcon = (item) => {
		switch(item) {
			case 'facebook': {
				return <FontAwesomeIcon icon={faFacebookF} />
			}
			case 'twitter': {
				return <FontAwesomeIcon icon={faTwitter} />
			}
			case 'linkedin': {
				return <FontAwesomeIcon icon={faLinkedin} />
			}
		}
	}
	return (
		<FooterSocialsHolder>
			{socials.map(social => (
				<a href={social.url} key={social.id}>
					{getSocialIcon(social.name)}
				</a>
			))}
		</FooterSocialsHolder>
	)
}

export default FooterSocials;