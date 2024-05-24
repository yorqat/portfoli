<script>
	import UnderConstruction from '$lib/UnderConstruction.svelte'
	import MetaHead from '$lib/MetaHead.svelte'
	import GuideLine from '$lib/svg/GuideLine.svelte'

	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()

	import '$lib/styles/active-nav/work.css'
</script>

<MetaHead
	description="Yor's creative for imaginary companies and products"
	keywords="Web, Framework, Frontend, CSS, JS"
	title="Yor mockups"
/>

<UnderConstruction />

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

<style>
	.gl {
		width: 155%;
		pointer-events: none;
	}

	#g2 {
		top: 3vw;
	}

	#g1 {
		bottom: 7.5vw;
	}

	#g4 {
		rotate: -45deg;
		left: 20rem;
		top: 0;
	}

	#g3 {
		rotate: -45deg;
		left: -60rem;
		top: 0;
	}
</style>
