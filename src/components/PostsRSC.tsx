import { Badge } from './ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

const fetchPosts = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=5'
	);
	const data = await res.json();
	return data;
};

const PostRSC = async () => {
	const posts = await fetchPosts();

	return (
		<>
			<Badge className="m-4 bg-purple-700">
				This is a React Server Component
			</Badge>

			{posts?.length === 0 ? (
				<div className="flex justify-center ml-6">
					<div className="absolute w-12 h-12 border-4 border-gray-200 border-solid rounded-full"></div>
					<div className="absolute w-12 h-12 border-4 border-solid rounded-full border-slate-600 animate-spin border-t-transparent"></div>
				</div>
			) : (
				posts?.map((post: any) => (
					<Card key={post.id} className="mb-4 md:w-1/2 lg:w-1/3">
						<CardHeader>
							<CardTitle>{post.title}</CardTitle>
						</CardHeader>
						<CardDescription className="px-4 pb-4">
							{post.body}
						</CardDescription>
					</Card>
				))
			)}
		</>
	);
};

export default PostRSC;
