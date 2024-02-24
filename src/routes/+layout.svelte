<script>
	const { children } = $props();
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import SkipNav from '$lib/SkipNav.svelte';

	import '$lib/styles/reduced-motion.css';
	import '$lib/styles/theme.css';
</script>

<div id="viewport">
	<SkipNav />
	<Nav />
	<main id="content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	#viewport {
		height: 100svh;
		display: flex;
		flex-direction: column;
	}

	#content {
		overflow-y: scroll;
		scroll-behavior: smooth;
		position: relative;
		height: 100%;
	}

	#viewport {
		background-color: var(--bg);
		color: var(--clr);
	}

	:global(.container) {
		margin-inline: auto;
	}

	/* 2xs */
	@media (min-width: 200px) {
		#viewport {
		}

		:global(.container) {
			width: 100%;
			padding-inline: 1.5rem;
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
			/* border: 2px green solid; */
			/* width: 768px; */
		}
	}

	/* lg */
	@media (min-width: 1024px) {
		:global(.container) {
			max-width: 768px;
			/* width: 1024px; */
			/* border: 2px yellow solid; */
		}
	}

	/* xl */
	@media (min-width: 1280px) {
		:global(.container) {
			/* max-width: 1120px; */
			/* width: 1280px; */
			/* border: 2px orange solid; */
		}
	}

	/* 2xl */
	@media (min-width: 1536px) {
		:global(.container) {
			/* border: 2px red solid; */
		}
	}
</style>
