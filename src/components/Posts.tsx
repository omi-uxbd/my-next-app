'use client';

import { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

const Test = () => {
	const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=5'
			);
			const data = await res.json();
			setPosts(data);
		};

		getPosts();
	}, []);

	return posts?.length === 0 ? (
		<div className="flex justify-center ml-6">
			<div className="absolute w-12 h-12 border-4 border-gray-200 border-solid rounded-full"></div>
			<div className="absolute w-12 h-12 border-4 border-solid rounded-full border-slate-600 animate-spin border-t-transparent"></div>
		</div>
	) : (
		posts?.map((post) => (
			<Card key={post.id} className="mb-4 md:w-1/2 lg:w-1/3">
				<CardHeader>
					<CardTitle>{post.title}</CardTitle>
				</CardHeader>
				<CardDescription className="px-4 pb-4">
					{post.body}
				</CardDescription>
			</Card>
		))
	);
};

export default Test;
