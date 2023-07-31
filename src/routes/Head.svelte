<script lang="ts">
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<Toggle />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.title {
		font-size: var(--font-size-fluid-2);
	}

	@media (min-width: 768px) {
		a {
			font-size: var(--font-size-fluid-0);
		}

		.title {
			font-size: var(--font-size-fluid-0);
			font-weight: bold;
		}
	}
</style>
