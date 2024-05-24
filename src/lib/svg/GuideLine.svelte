<!-- <svg width="2500" height="2" viewBox="0 0 2500 2" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M2500 1L-0.000974047 1"
		stroke-opacity="0.21"
		stroke-dasharray="33 33"
		/>
	</svg>
	<script>
	</script> -->
<script>
	import '$lib/styles/theme.css'
</script>

<svg
	width="var(--gl-width)"
	height="2"
	viewBox="0 0 2500 2"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<pattern
			id="dashedPattern"
			x="0"
			y="0"
			width="100%"
			height="100%"
			patternUnits="userSpaceOnUse"
		>
			<path
				d="M2500 1L-0.000974047 1"
				stroke="var(--clr)"
				stroke-opacity="0.8"
				stroke-dasharray="22 22"
			/>
			<path
				d="M1 250L1 -0.000974047"
				stroke="var(--clr)"
				stroke-opacity="0.8"
				stroke-dasharray="22 22"
			/>
		</pattern>
	</defs>

	<!-- <line x1="0" y1="50%" x2="100%" y2="2" stroke="url(#dashedPattern)" /> -->
	<!-- <line x1="50%" y1="0%" x2="2" y2="100%" stroke="url(#dashedPattern)" /> -->
</svg>

<style>
	/* path {
		color: var(--bg2);
	} */
</style>
