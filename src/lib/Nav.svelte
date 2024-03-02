<script lang="ts">
	import '$lib/fonts/Afacad-Variable.css';
	import '$lib/fonts/Gugi.css';
	import Nojs from '$lib/svg/Nojs.svelte';
	import ToggleSystemCheckbox from '$lib/ToggleSystemCheckbox.svelte';
	import German from './svg/German.svelte';

	// TODO: Make this DRY
	type CheckState = 'true' | 'false' | 'mixed';

	let reducedMotionInit: CheckState = $state('mixed');
	let darkInit: CheckState = $state('mixed');

	$effect(() => {
		let reducedMotion = localStorage.getItem('force-reduced-motion');
		if (reducedMotion) {
			switch (reducedMotion) {
				case 'reduce':
					reducedMotionInit = 'true';
					break;
				case 'no-reduce':
					reducedMotionInit = 'false';
					break;
			}
			reduced_motion(reducedMotionInit);
		}

		let darkTheme = localStorage.getItem('force-dark-theme');
		if (darkTheme) {
			switch (darkTheme) {
				case 'dark':
					darkInit = 'true';
					break;
				case 'light':
					darkInit = 'false';
					break;
			}
			dark(darkInit);
		}
	});

	const reduced_motion = (check_state: CheckState) => {
		let viewport = document.getElementById('viewport');
		const item = 'force-reduced-motion';
		const data = `data-${item}`;

		switch (check_state) {
			case 'true':
				viewport?.setAttribute(data, 'reduce');
				localStorage.setItem(item, 'reduce');
				break;
			case 'false':
				viewport?.setAttribute(data, 'no-reduce');
				localStorage.setItem(item, 'no-reduce');
				break;
			case 'mixed':
				viewport?.removeAttribute(data);
				localStorage.removeItem(item);
				break;
		}
	};

	const dark = (check_state: CheckState) => {
		let viewport = document.getElementById('viewport');
		const item = 'force-dark-theme';
		const data = `data-${item}`;
		switch (check_state) {
			case 'true':
				viewport?.setAttribute(data, 'dark');
				localStorage.setItem(item, 'dark');
				break;
			case 'false':
				viewport?.setAttribute(data, 'light');
				localStorage.setItem(item, 'light');
				break;
			case 'mixed':
				viewport?.removeAttribute(data);
				localStorage.removeItem(item);
				break;
		}
	};
</script>

<header id="header">
	<div class="container">
		<div>
			<a class="logo" href="/"> YQ </a>

			<input aria-label="a11y-toggle" type="checkbox" name="a11y" id="a11y" />

			<aside id="a11y-ctx-menu">
				<div class="a11y-ctx-menu__title">Preferences <Nojs /></div>

				<div class="a11y-ctx-menu__item">
					<ToggleSystemCheckbox checked={darkInit} logic={dark} label="dark" />
				</div>

				<div class="a11y-ctx-menu__item">
					<ToggleSystemCheckbox
						checked={reducedMotionInit}
						logic={reduced_motion}
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
			<a class="nav-route" href="/blogs">Blogs</a>
			<a class="nav-route" href="/mockeries">Work</a>
			<a class="nav-route" href="/reach-out">Reach</a>
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
	@import url('https://fonts.googleapis.com/css2?family=Archivo&family=Urbanist:wght@100&display=swap');

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
		top: 2rem;
		margin-left: 1rem;
		aspect-ratio: 1;
		height: 1.5rem;

		&::after {
			position: absolute;
			background-color: white;
			color: var(--header-bg);
			box-shadow: inset 0px 0px 5px 0px rgba(138, 138, 138, 1);
			font-family: sans-serif;
			content: '↷';
			font-size: 1.1rem;
			font-weight: 800;
			transition: transform 200ms ease-in-out;
			height: 1.5rem;
			border-radius: 50%;
			aspect-ratio: 1;
		}

		&:checked::after {
			transform: scaleY(-1) rotate(90deg);
		}
	}

	@keyframes drop {
		from {
			top: 5rem;
		}

		to {
			top: 6rem;
		}
	}

	#a11y-ctx-menu {
		display: none;
		position: absolute;

		background-color: var(--bg2);
		top: 6rem;
		animation: drop 200ms forwards;
		padding: 1.6rem 2rem;
		border-radius: 16px;
		box-shadow: var(--shadow-1);
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
		gap: 0.5rem;
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
		font-family: 'Archivo', sans-serif;
		background: var(--header-bg);
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
		margin-block: 1rem;
		padding-block: 3rem;
		grid-area: 3 / 2 / 3 / 3;

		> .nav-route {
			@include no-appearance();

			// tab selection
			&:focus-visible {
				text-decoration: none;
			}
		}
	}

	#nav-toggle {
		@include no-appearance();

		padding-inline: 1rem;
		cursor: pointer;
		position: relative;
		grid-area: 1 / 3 / 3 / 4;

		&:hover {
			filter: brightness(0.8);
			text-decoration: underline;
		}

		&::after {
			font-family: sans-serif;
			content: 'X';
			// font-weight: ;
			font-size: 1.8rem;
			position: absolute;
			color: white;

			transition: rotate 200ms ease-in-out;
		}

		&:checked ~ #nav {
			display: none;
		}

		&:checked::after {
			content: '≡';
			rotate: 180deg;
			font-size: 2rem;
		}
	}

	.logo {
		@include no-appearance();

		font-size: 3rem;
		font-weight: 700;
		font-family: 'Urbanist', sans-serif;
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

			> .nav-route {
				font-size: 1.5rem;
				letter-spacing: 1px;
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
