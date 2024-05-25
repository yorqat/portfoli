<script lang="ts">
	import MetaHead from '$lib/MetaHead.svelte'
	import '$lib/fonts/site-fonts.css'
	import A11y from '$lib/svg/A11y.svelte'
	import '$lib/styles/reduced-motion.css'
	import '$lib/styles/theme.css'

	import { initA11y, type CheckState } from '$lib/a11y'

	let reducedMotionInit: CheckState = $state('mixed')
	let darkInit: CheckState = $state('mixed')

	$effect(() => {
		initA11y(reducedMotionInit, darkInit)
	})

	import '$lib/styles/view-transition.css'

	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()
</script>

<MetaHead
	description="Yor's Hero home"
	keywords="Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS"
	title="Yor homepage"
/>

<div id="viewport">
	<header id="header" class="home">
		<div class="titular">
			<div use:transition={'logo'} id="logo" class="hero">
				<span>Y</span><span class="collapsible">or</span><span>Q</span><span class="collapsible"
					>at</span
				>
			</div>
			<div class="titular__subtitle">
				<div class="hero-subtitle">
					<div>Developer</div>
					<div>UX Designer</div>
				</div>
			</div>
		</div>

		<nav class="links">
			<div>
				<a use:transition={'blog'} href="/blog">Blog</a>
			</div>
			<div>
				<a use:transition={'work'} href="/work">Work</a>
			</div>
			<div>
				<a use:transition={'reach'} href="/reach">Reach </a>
			</div>
		</nav>
	</header>
</div>

<style lang="scss">
	#viewport {
		height: 600svh;
		background: var(--bg);
		color-scheme: var(--clr-scheme);
	}

	a {
		text-decoration: none;
		color: var(--clr);
		transition: color 400ms;

		&:hover,
		&:focus {
			color: var(--clr2);
		}
	}

	* {
		box-sizing: border-box;
	}

	header {
		inset: 0;
		position: absolute;
		overflow: hidden;
		background: var(--bg2);

		display: grid;
		grid-template-columns: 0.5fr 1fr 1.5fr;
		grid-template-rows: 1fr 1.5fr 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.titular {
		flex-grow: 1;
		grid-area: 2 / 1 / 3 / 3;
		text-align: justify;

		display: flex;

		flex-direction: column;
		align-items: flex-end;
		justify-content: center;

		&__subtitle {
			display: flex;
		}
	}

	.collapsible {
		transition: all 600ms;
		transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
		max-width: 3ch;
		display: inline-flex;
	}

	.titular:hover {
		.collapsible {
			max-width: 0;
			opacity: 0;
		}
	}

	.hero-subtitle {
		font-family: 'Raleway', sans-serif;
		font-optical-sizing: auto;
		font-weight: 100;
		font-style: italic;
		font-size: 2.5rem;
		font-size: clamp(2rem, 5vw, 3rem);

		text-transform: uppercase;
		color: var(--clr2);
	}

	.links {
		font-size: clamp(2.5rem, 10vw, 5rem);
		color: var(--clr);
		font-weight: 100;
		font-family: 'archivoregular', sans-serif;

		display: flex;
		flex-direction: column;

		flex-grow: 1;
		grid-area: 1 / 3 / 4 / 4;

		div {
			flex-grow: 1;
			display: grid;
			place-items: center;
		}
	}

	#logo {
		font-family: 'urbanistthin', sans-serif;
		color: var(--clr2);
		font-size: clamp(5rem, 10vw, 8rem);
	}

	@media (width < 768px) {
		header {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.links {
		}
	}
</style>
