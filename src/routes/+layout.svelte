<script>
	const { children } = $props();
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div id="viewport">
	<Nav />
	<div id="content" class="container">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	#viewport {
		height: 100svh;

		display: grid;
		grid-template-columns: 1fr 1120px 1fr;
		grid-template-rows: minmax(100px, max-content) 1fr minmax(0, max-content);
		grid-column-gap: 20px;
		grid-row-gap: 0px;
	}

	#content {
		overflow-y: scroll;
		grid-area: 2 / 1 / 3 / 4;
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

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--bg: #141822;
			--bg2: rgb(12, 12, 12);
			--clr: #c1c1c1;
			--clr2: #fff;
			--header-bg: rgb(28, 77, 114);
		}
	}

	:global(.container) {
		margin-inline: auto;
		padding-inline: 1rem;
	}

	/* 2xs */
	@media (min-width: 200px) {
		#viewport {
			grid-template-columns: 0 1fr 0;
		}

		:global(.container) {
			width: 100%;
			/* border: 2px purple solid; */
		}

		:global(p) {
			padding-bottom: 2rem;
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
			/* width: 100%; */
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
			max-width: 768px;
			/* border: 2px green solid; */
			/* width: 768px; */
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
			max-width: 1120px;
			/* border: 2px red solid; */
		}
	}
</style>
