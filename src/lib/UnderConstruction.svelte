<script>
	import ConstructionDumpDumper from './svg/Dumper.svelte';
	import ConstructionDiggerExcavation from './svg/DiggerExcavation.svelte';
</script>

<section class="viewport centered">
	<h1 class="">This page / section is under construction</h1>

	<div class="construction">
		<div class="dumper">
			<ConstructionDumpDumper />
		</div>

		<div class="excavator">
			<ConstructionDiggerExcavation />
		</div>
	</div>
</section>

<style>
	/* @import url('$lib/fonts/Montserrat:wght@100'); */

	h1 {
		font-family:
			'Montserrat',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Helvetica,
			Arial,
			sans-serif;
		color: #797979;
		text-align: center;
	}

	.viewport {
		width: 100%;
		padding-top: 1rem;
		position: relative;
	}

	.construction {
		background-size: cover;
		height: 20rem;
		width: 100%;
		position: absolute;

		overflow: hidden;
	}

	.construction > div {
		display: inline-block;
		position: absolute;
	}

	.dumper {
		animation: slideLeftRight 30s infinite linear;
		transform: scaleX(-1) scale(0.8);
	}

	.excavator {
		position: absolute;
		animation: slideRightLeft 15s infinite linear;
		bottom: 0;
	}

	@keyframes slideLeftRight {
		0% {
			left: -11rem;
		}

		100% {
			left: 100%;
		}
	}

	@keyframes slideRightLeft {
		0% {
			right: -11rem;
		}

		100% {
			right: 100%;
		}
	}
</style>
