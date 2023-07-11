import Image from 'next/image';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24">
			{/* <h1>Hello World!</h1> */}
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid items-center w-full gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Name of your project"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Framework</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select" />
										<SelectContent position="popper">
											<SelectItem value="next">
												Next.js
											</SelectItem>
											<SelectItem value="sveltekit">
												SvelteKit
											</SelectItem>
											<SelectItem value="astro">
												Astro
											</SelectItem>
											<SelectItem value="nuxt">
												Nuxt.js
											</SelectItem>
										</SelectContent>
									</SelectTrigger>
								</Select>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
