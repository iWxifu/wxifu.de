<script lang="ts">
	import Head from './Head.svelte';
	import Footer from './Footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.css';
	import Transition from './transition.svelte';
	export let data;
</script>

<div class="layout">
	<Head />
	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 80rem;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
