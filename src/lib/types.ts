export type Categories = 'meow' | 'arson' | 'svelte' | 'sveltekit';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
