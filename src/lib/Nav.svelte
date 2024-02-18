<script lang="ts">
	import '$lib/fonts/Afacad-Variable.css';
	import '$lib/fonts/Gugi.css';
</script>

<header>
	<div class="container">
		<div>
			<a class="logo" href="/"> yQ </a>

			<input aria-label="a11y-toggle" type="checkbox" name="a11y" id="a11y" />

			<div id="a11y-ctx-menu">
				<div class="a11y-ctx-menu__title">Preferences</div>
				<div class="a11y-ctx-menu__item">
					<label for="reduced-motion"> reduced-motion </label>
					<input type="checkbox" name="reduced-motion" id="reduced-motion" />
				</div>

				<div class="a11y-ctx-menu__item">
					<label for="theme-switch"> theme </label>
					<input type="checkbox" name="theme-switch" id="theme-switch" />
				</div>

				<div class="a11y-ctx-menu__item">
					<label for="lang-switch"> language </label>
					<input type="checkbox" name="lang-switch" id="lang-switch" />
				</div>
			</div>
		</div>

		<input aria-label="nav-toggle" type="checkbox" id="nav-toggle" checked />

		<nav id="nav">
			<a class="nav-route" href="/blogs">Blogs</a>
			<a class="nav-route" href="/gallery">Art</a>
			<a class="nav-route" href="/mockeries">Web</a>
			<a class="nav-route" href="/reach-out">Contact</a>
		</nav>
	</div>
</header>

<style lang="scss">
	@mixin no-appearance {
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;
		transition: transform 300ms ease-out;

		&:focus-visible {
			outline: medium auto currentColor;
			outline: medium auto invert;
			outline: 5px auto -webkit-focus-ring-color;
		}

		&:focus,
		&:hover::after,
		&:hover {
			transform: scale(1.1);
		}
	}

	#nav-toggle-label {
		grid-area: 1 / 3 / 3 / 4;
	}

	#a11y {
		@include no-appearance;
		position: absolute;
		top: 2rem;
		padding-left: 0.6rem;

		&::after {
			position: absolute;
			color: white;
			content: '↴';
			content: '↷';
			font-size: 1.6rem;
			transition: transform 200ms;
		}

		&:checked::after {
			transform: scaleY(-1) rotate(90deg);
		}
	}

	#a11y-ctx-menu {
		display: none;
		position: absolute;

		background-color: var(--bg2);
		color: var(--clr);
		margin-top: 2rem;
		padding: 1.6rem 2rem;
		border-radius: 12px;
		font-family: 'Afacad-Variable400', sans-serif;
		font-size: 1.2rem;

		.a11y-ctx-menu__title {
			color: var(--clr2);
			font-size: 2rem;
			margin-bottom: 1.6rem;
			font-family: 'Afacad-Variable700', sans-serif;
		}

		.a11y-ctx-menu__item {
			display: flex;
			gap: 2rem;
			justify-content: space-between;
			cursor: pointer;
		}
	}

	#a11y:checked ~ #a11y-ctx-menu {
		display: block;
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
		grid-area: 1 / 1 / 2 / 4;
		background-color: var(--header-bg);
		color: white;
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
		font-size: 1.5rem;
		font-weight: 400;
		font-family: 'Gugi', sans-serif;
		font-family: 'Afacad-Variable400', sans-serif;

		text-align: center;
		flex-direction: column;
		justify-content: space-around;
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
			font-family: 'Afacad-Variable700', sans-serif;
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

		font-size: 2.5rem;
		font-weight: 700;
		grid-area: 1 / 1 / 3 / 2;
		font-family: 'Gugi', sans-serif;
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
			grid-area: 1 / 2 / 3 / 3;

			justify-content: center;
			background-color: transparent;
			margin-block: 0rem;
			padding-block: 0rem;

			> .nav-route {
				font-size: 1.2rem;
				font-weight: 300;
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
				gap: 2rem;
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
