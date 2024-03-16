import blogPosts from "./data";
import { FooterHeading, FooterText, FooterItem } from "../../Footer.styled";

const BlogPosts = () => {
	return (
		<div>
			<FooterHeading>Blog posts</FooterHeading>
			{blogPosts.map(post => (
				<FooterItem key={post.id}>
					<FooterText as="h4" $bold>{post.title}</FooterText>
					<p>{post.teaser}</p>
				</FooterItem>
			))}
		</div>
	)
}

export default BlogPosts;