import Wrapper from "../wrapper/Wrapper";
import { HeroHolder, HeroBg, HeroTitle, Link } from "./Hero.styled";
import { heroData } from "./data";
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Hero = () => {
	return (
		<HeroHolder>
			<HeroBg>
				<Wrapper>
					<HeroTitle>
						<span>{heroData.title.firstRow}</span>
						{heroData.title.secondRow}
					</HeroTitle>
					<Link to={heroData.cta.url}>
						{heroData.cta.text}
					</Link>
				</Wrapper>
			</HeroBg>
		</HeroHolder>
	)
}

Hero.propTypes = {
	data: PropTypes.array
}

export default Hero;