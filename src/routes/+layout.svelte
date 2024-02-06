<script>
	const { children } = $props();
	import Nav from '$lib/Nav.svelte';
</script>

<div class="containerer">
	<Nav />
	<div id="content" class="container">
		{@render children()}
	</div>
	<footer>Special thanks to Erin and Joan for being my girlfriends</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	footer {
		font-size: 1.1rem;
		padding: 1.5rem;
		background-color: var(--bg2);
		text-align: center;
	}

	.containerer {
		display: flex;
		flex-direction: column;
		height: 100svh;
	}

	#content {
		flex: 1;
	}

	:global(:root) {
		--bg: #f0f0f0;
		--bg2: #fbfbfb;

		--clr: #5d5d5d;
		--clr2: rgb(12, 12, 12);
		--header-bg: #002d62;
	}

	:global(body) {
		background-color: var(--bg);
		color: var(--clr);
	}

	/* Applying styles for the dark color scheme */
	@media (prefers-color-scheme: dark) {
		/* Your dark mode styles here */
		:global(:root) {
			--bg: #141822;
			--bg2: rgb(12, 12, 12);
			--clr: #c1c1c1;
			--clr2: #fff;
			--header-bg: rgb(28, 77, 114);
		}

		/* Other dark mode styles */
	}

	:global(.container) {
		margin-inline: auto;
		padding-inline: 1rem;
	}

	/* 2xs */
	@media (min-width: 200px) {
		:global(.container) {
			width: 100%;
			/* border: 2px purple solid; */
		}

		:global(.img) {
			width: 100%;
			padding-block: 0.5rem;
		}
	}

	/* xs */
	@media (min-width: 475px) {
		:global(.container) {
			/* border: 2px blue solid; */
		}

		:global(.img-res) {
			width: 475px;
		}
	}

	/* sm */
	@media (min-width: 640px) {
		:global(.container) {
			width: 640px;
			/* border: 2px teal solid; */
		}

		:global(.img) {
			width: 70%;
			text-align: center;
		}
	}

	/* md */
	@media (min-width: 768px) {
		:global(.container) {
			/* border: 2px green solid; */
			width: 768px;
		}
	}

	/* lg */
	@media (min-width: 1024px) {
		:global(.container) {
			/* width: 1024px; */
			/* border: 2px yellow solid; */
		}
	}

	/* xl */
	@media (min-width: 1280px) {
		:global(.container) {
			/* width: 1280px; */
			/* border: 2px orange solid; */
		}
	}

	/* 2xl */
	@media (min-width: 1536px) {
		:global(.container) {
			/* width: 1536px; */
			/* border: 2px red solid; */
		}
	}
</style>
