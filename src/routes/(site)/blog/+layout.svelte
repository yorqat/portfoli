<script>
	import '$lib/styles/blogs.css'
	import GuideLine from '$lib/svg/GuideLine.svelte'
	const { children } = $props()

	import '$lib/styles/view-transition.css'

	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()

	import '$lib/styles/active-nav/blogs.css'
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
</style>
