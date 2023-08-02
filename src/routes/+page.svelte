<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Github, AtSign, Headphones, Rss, Heart } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { annotate } from 'rough-notation';
	import * as config from '$lib/config';
	export let data;

	onMount(() => {
		const n2 = document.querySelector('#name');
		// @ts-ignore
		const a2 = annotate(n2, { type: 'underline', color: '#f38ba8', iterations: 3 });
		a2.show();
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="head-grid">
		<div class="head-about">
			<h1>Hey there, I'm <span id="name">Ruby</span>.</h1>
			<div class="about-wrap">
				<p class="about-info">Local Web Dev catgirl, living in your walls.</p>
				<p class="about-info">
					I've recently been interested in privacy and minimal or "bloat" free design. As such, I
					mostly work with <span>Svelte</span>, <span>Astro</span> and
					<span>Rust</span>
					but I'm also experienced with <span>React</span>, <span>Vue</span> and
					<span>Typescript</span>.
				</p>
				<p class="about-info">
					Aside of programming I'm interested in Music, Philosophy and Languages.
				</p>
				<div style="display: flex; gap: var(--size-fluid-1);">
					<a href="https://github.com/iCynosis" target="_blank" title="GitHub"><Github /></a>
					<a
						href="https://open.spotify.com/user/5t5hhvmbf43vois9z6bxgx0y5?si=49a0f549cd07468d"
						target="_blank"
						title="Spotify"><Headphones /></a
					>
					<a href="https://lethallava.land/@ruby" title="fedi"><Heart /></a>
					<a href="mailto:business@wxifu.de" title="mail me"><AtSign /></a>
				</div>
			</div>
		</div>

		<div class="head-icon">
			<img src="/avatar.png" alt="" />
		</div>
	</div>

	<div>
		<div class="post-header">
			<p class="post-counter">{data.posts.length} Posts</p>
			<a href="/rss.xml" target="_blank" style="display: flex">RSS Feed&nbsp;<Rss /></a>
		</div>
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={post.slug} class="title">{post.title}</a>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	a {
		color: var(--text-1);
	}

	.post {
		max-inline-size: var(--size-content-3);
		border-radius: var(--radius-2);
		padding: var(--size-3);
		border: 1px solid var(--border);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
		color: var(--text-1);
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	.head-grid {
		display: flex;

		flex-direction: column;
		gap: var(--size-4);

		margin-bottom: var(--size-8);
	}

	@media (min-width: 768px) {
		.head-grid {
			margin-top: var(--size-11);
			flex-direction: row;
		}
	}

	.head-about {
		width: 100%;
		/* opacity: 0; */
	}

	.head-icon {
		width: 100%;
	}

	@media (min-width: 768px) {
		.head-about {
			width: 70%;
		}

		.head-icon {
			width: 30%;
		}
	}

	.head-about h1 {
		font-size: var(--font-size-fluid-3);
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.about-info {
		font-size: var(--font-size-fluid-1);
	}

	.about-wrap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		font-size: var(--font-size-fluid-1);
		margin-bottom: var(--size-4);
	}

	.post-counter {
		font-size: var(--font-size-fluid-1);
	}
</style>
