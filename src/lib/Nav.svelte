<script lang="ts">
	import Nojs from '$lib/svg/Nojs.svelte'
	import ToggleSystemCheckbox from '$lib/ToggleSystemCheckbox.svelte'
	import { darkThemeUpdate, reducedMotionUpdate } from '$lib/a11y'

	import German from './svg/German.svelte'

	interface NavProps {
		darkInit: string
		reducedMotionInit: string
	}

	let { darkInit, reducedMotionInit } = $props<NavProps>()

	import { setupViewTransition } from 'sveltekit-view-transition'
	import { page } from '$app/stores'
	const { transition } = setupViewTransition()
	import '$lib/styles/theme.css'
</script>

<header id="header">
	<div class="container">
		<div>
			<a use:transition={'logo'} class="logo" href="/"> YQ </a>

			<input
				aria-label="a11y-toggle"
				type="checkbox"
				name="a11y"
				id="a11y"
				use:transition={'a11y'}
			/>

			<aside id="a11y-ctx-menu">
				<div class="a11y-ctx-menu__title">Preferences <Nojs /></div>

				<div class="a11y-ctx-menu__item">
					<ToggleSystemCheckbox checked={darkInit} logic={darkThemeUpdate} label="dark" />
				</div>

				<div class="a11y-ctx-menu__item">
					<ToggleSystemCheckbox
						checked={reducedMotionInit}
						logic={reducedMotionUpdate}
						label="reduced-motion"
					/>
				</div>

				<div class="a11y-ctx-menu__item">
					<German label="Language" />
				</div>
			</aside>
		</div>

		<input aria-label="nav-toggle" type="checkbox" id="nav-toggle" checked />

		<nav id="nav">
			<a
				use:transition={'blogs'}
				class="nav-route"
				href="/blog"
				aria-current={$page.url.pathname.includes('/blog') ? 'page' : undefined}>Blog</a
			>
			<a
				use:transition={'work'}
				class="nav-route"
				href="/work"
				aria-current={$page.url.pathname.includes('/work') ? 'page' : undefined}>Work</a
			>
			<a
				use:transition={'reach'}
				class="nav-route"
				href="/reach"
				aria-current={$page.url.pathname.includes('/reach') ? 'page' : undefined}>Reach</a
			>
		</nav>
	</div>
</header>

<style lang="scss">
	@mixin no-appearance {
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;
	}

	@mixin grow {
		transition: transform 300ms ease-out;

		&:focus,
		&:hover::after,
		&:hover {
			transform: scale(1.1);
		}
	}

	.indicator {
		background-color: var(--bg2);
		aspect-ratio: 1;
		width: 1rem;
		border-radius: 50%;
	}

	#nav-toggle-label {
		grid-area: 1 / 3 / 3 / 4;
	}

	#a11y {
		@include no-appearance;
		position: absolute;
		top: 2.25rem;
		margin-left: 1rem;
		aspect-ratio: 1;
		height: 1.5rem;

		&::after {
			position: absolute;
			background-color: var(--clr2);
			color: var(--header-bg);
			font-family: sans-serif;
			content: '⌵';
			font-size: 1.1rem;
			font-weight: 800;
			transition:
				scale 400ms,
				rotate 800ms;
			padding: 0.1rem;
			height: 1.25rem;
			border-radius: 50%;
			aspect-ratio: 1;
		}

		&:checked::after {
			rotate: -90deg;
			scale: 1 -1;
		}
	}

	@keyframes drop {
		from {
			top: 5rem;
		}
	}

	#a11y-ctx-menu {
		display: none;
		position: fixed;

		background-color: var(--bg2);
		top: 6rem;
		animation: drop 500ms forwards;
		padding: 1.6rem 2rem;
		border-radius: 16px;
		border: 0.2px solid var(--clr);
		// box-shadow: var(--shadow-1);
		font-size: 1.2rem;

		.a11y-ctx-menu__title {
			color: var(--clr2);
			font-size: 2rem;
			margin-bottom: 1rem;

			display: flex;
			justify-content: space-between;
		}

		.a11y-ctx-menu__item {
			color: var(--clr2);
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
		}
	}

	#a11y:checked ~ #a11y-ctx-menu {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		z-index: 2;

		label {
			text-transform: capitalize;
			display: block;
			padding-bottom: 0.5rem;
		}
	}

	button {
		border: unset;
		padding: 0.5rem 1.2rem;
		color: var(--bg);
		font-size: 1.1rem;

		&:hover {
			background-color: var(--clr2);
		}
	}

	header {
		position: relative;
		font-family: 'archivoregular', sans-serif;
		background: var(--bg2);
		box-shadow: var(--bg) 0px 20px 30px -10px;
		transition: all 500ms;
	}

	.container {
		position: relative;
		padding: 1rem 2.5rem;
		justify-content: center;
		height: 100%;

		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto auto;
	}

	#nav {
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-weight: 400;

		text-align: center;
		flex-direction: column;
		justify-content: space-between;
		flex: 0 0 100%;
		gap: 4rem;
		padding-top: 2rem;
		grid-area: 3 / 2 / 3 / 3;

		.nav-route {
			// @include no-appearance();

			&::after {
				position: absolute;
				height: 2px;
				width: 4rem;
				top: 4rem;
				// --left: -200px;
				left: var(--left);

				background-color: var(--clr2);
			}

			// tab selection
			&:focus-visible {
				text-decoration: none;
			}
		}
	}

	#nav-toggle {
		@include no-appearance();

		padding-inline: 1.75rem;
		cursor: pointer;
		position: relative;
		grid-area: 1 / 3 / 3 / 4;
		display: flex;
		place-items: center;

		&:hover {
			filter: brightness(0.8);
			text-decoration: underline;
		}

		&::after {
			font-family: sans-serif;
			content: 'x';
			font-size: 2.2rem;
			position: absolute;
			color: var(--clr2);

			transform-origin: center;
			scale: 0.8 0.9;
			rotate: -90deg;
			transition:
				scale 300ms,
				rotate 200ms ease-out;
		}

		&:checked ~ #nav {
			display: none;
		}

		&:checked::after {
			scale: 1;
			rotate: 0deg;
			content: '=';
		}
	}

	.logo {
		@include no-appearance();

		font-size: 3rem;
		font-family: 'urbanistthin', sans-serif;
	}

	a {
		color: unset;
		text-decoration: none;
		cursor: pointer;
	}

	/* md */
	@media (min-width: 768px) {
		.container {
			grid-template-columns: auto 1fr auto;
			grid-template-rows: minmax(0, 1fr);
		}

		#nav-toggle-label {
			display: none;
		}

		#nav {
			display: flex;
			flex: 1 0 auto;
			grid-area: 1 / 3 / 3 / 3;

			justify-content: flex-end;
			background-color: transparent;
			margin-block: 0rem;
			padding-block: 0rem;
			position: relative;

			// .nav-active {
			// 	position: absolute;
			// 	height: 2px;
			// 	width: 4rem;
			// 	top: 4rem;
			// 	// --left: -200px;
			// 	left: var(--left);

			// 	background-color: var(--clr2);
			// }

			> .nav-route {
				color: var(--clr);
				font-size: 1.5rem;
				letter-spacing: 1px;
				position: relative;

				&[aria-current='page'] {
					color: var(--clr2);
				}

				&:hover {
					color: var(--clr2);
				}
			}
		}

		button {
			grid-area: 1 / 3 / 2 / 4;
		}

		// disappears the nav when unchecked
		#nav-toggle {
			display: none;

			&:checked ~ #nav,
			~ #nav {
				gap: 5rem;
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
