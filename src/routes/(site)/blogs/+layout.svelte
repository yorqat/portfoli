<script>
	import '$lib/styles/blogs.css';
	import GuideLine from '$lib/svg/GuideLine.svelte';
	const { children } = $props();

	import '$lib/styles/view-transition.css';

	import { setupViewTransition } from 'sveltekit-view-transition';
	const { transition } = setupViewTransition();

	import '$lib/styles/active-nav/blogs.css';
</script>

<div class="blog-layout container">
	{@render children()}

	<div id="g1" class="gl" style="position: absolute;" use:transition={'g1'}>
		<GuideLine />
	</div>

	<div id="g2" class="gl" style="position: absolute;" use:transition={'g2'}>
		<GuideLine />
	</div>

	<div id="g3" class="gl" style="position: absolute;" use:transition={'g3'}>
		<GuideLine />
	</div>

	<div id="g4" class="gl" style="position: absolute;" use:transition={'g4'}>
		<GuideLine />
	</div>
</div>

<style>
	@media (min-width: 200px) {
		.gl {
			pointer-events: none;
			transition: all 600ms;
			/* background-color: tomato; */
			width: 525%;
		}

		#g3,
		#g4 {
			transform-origin: left;
			rotate: 90deg;
		}

		#g1,
		#g2 {
			left: -25%;
		}

		#g2 {
			top: 5.5rem;
		}

		#g3 {
			top: -5.2rem;
			left: 1rem;
		}

		#g4 {
			top: -5.2rem;
			right: 0;
		}
	}

	@media (min-width: 640px) {
		.gl {
			/* background-color: palegreen; */
			width: 325%;
		}

		#g3 {
			left: 1rem;
		}

		#g4 {
			left: 39.5rem;
		}
	}

	@media (min-width: 768px) {
		.gl {
			/* background-color: yellow; */
			width: 300%;
		}

		#g3 {
			left: 1rem;
		}

		#g4 {
			left: 36.5rem;
		}
	}

	@media (min-width: 1024px) {
		.gl {
			width: 275%;
			/* background-color: yellowgreen; */
		}

		#g3 {
			left: 1rem;
		}

		#g4 {
			left: 46rem;
			/* left: 39rem; */
			/* left: clamp(39rem, 100vw ,46rem); */
		}
	}

	@media (min-width: 1280px) {
		.gl {
			width: 275%;
			/* background-color: aqua; */
		}

		#g3 {
			left: -2rem;
		}

		#g4 {
			left: 39.5rem;
		}
	}

	@media (min-width: 1536px) {
		.gl {
			width: 225%;
			/* background-color: turquoise; */
		}

		#g3 {
			left: -4rem;
		}

		#g4 {
			left: 49.5rem;
		}
	}
</style>
