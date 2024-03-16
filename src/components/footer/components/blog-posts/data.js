import { v4 as uuidv4 } from "uuid";

const blogPosts = [
	{
		id: uuidv4(),
		title: "Duis aute irure dolor in reprehenderit.",
		teaser: "in voluptate velit esse cillium dolore eu fugiat nulla pariatur."
	},
	{
		id: uuidv4(),
		title: "Ut enim ad minim veniam.",
		teaser: "in voluptate velit esse cillium dolore eu fugiat nulla pariatur."
	},
	{
		id: uuidv4(),
		title: "Officia deserunt mollit constrectur.",
		teaser: "in voluptate velit esse cillium dolore eu fugiat nulla pariatur."
	}
]

export default blogPosts;