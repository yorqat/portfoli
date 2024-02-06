<script>
	import ConstructionDumpDumper from './svg/construction-dump-dumper-svgrepo-com.svelte';
	import ConstructionDiggerExcavation from './svg/construction-digger-excavation-svgrepo-com.svelte';
</script>

<section class="viewport centered">
	<h1 class="">This page / section is under construction</h1>

	<div class="construction">
		<div class="dumper">
			<ConstructionDumpDumper width="10rem" height="10rem" fill="#002d62" />
		</div>

		<div class="excavator">
			<ConstructionDiggerExcavation width="10rem" height="10rem" fill="#002d62" />
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

	/* .centered {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
	} */

	.construction {
		background-size: cover;
		/* background: #fbff8b; */
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
