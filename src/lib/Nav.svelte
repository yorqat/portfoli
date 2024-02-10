<script lang="ts">
	import '$lib/fonts/Afacad-Variable.css';
</script>

<header>
	<div class="container">
		<div style="display:contents">
			<a class="logo" href="/"> yQ </a>
		</div>

		<input aria-label="nav toggle" type="checkbox" id="nav-toggle" checked />

		<nav id="nav">
			<a class="nav-route" href="/blogs">Blogs</a>
			<a class="nav-route" href="/gallery">Art</a>
			<a class="nav-route" href="/mockeries">Web</a>
			<a class="nav-route" href="/reach-out">Contact</a>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		grid-area: 1 / 1 / 2 / 4;
		background-color: var(--header-bg);
	}

	.container {
		padding: 1rem 2.5rem;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: flex-start;
		height: 100%;
	}

	#nav {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		font-weight: 400;

		text-align: center;
		height: 80svh;
		flex-direction: column;
		justify-content: space-around;
		flex: 0 0 100%;

		> .nav-route {
			transition:
				transform 200ms,
				font-weight 500ms;

			// tab selection
			&:focus {
				text-decoration: underline;
			}

			&:hover {
				transform: scale(1.2);
				font-weight: 400;
				cursor: pointer;
			}
		}
	}

	#nav-toggle {
		all: unset;
		height: 1.2rem;
		cursor: pointer;

		&:hover {
			filter: brightness(0.8);
			text-decoration: underline;
		}

		&::after {
			height: 100%;
			content: '✗';
			font-size: 2rem;
		}

		&:checked ~ #nav {
			display: none;
		}

		&:checked::after {
			content: '≡';
			font-size: 2rem;
		}
	}

	.logo {
		font-size: 2.5rem;
		font-weight: 700;
		margin-right: auto;
	}

	* {
		font-family: 'Afacad-Variable400', sans-serif;
		box-sizing: border-box;
		color: white;
	}

	a {
		all: unset;
		cursor: pointer;
	}

	/* md */
	@media (min-width: 768px) {
		#nav {
			display: flex;
			flex: 1 0 auto;

			justify-content: center;
			background-color: transparent;

			// revert back wheen larger screen
			height: 1.5rem;

			> .nav-route {
				font-size: 1.6rem;
				font-weight: 300;
			}
		}

		// disappears the nav when unchecked
		#nav-toggle {
			display: none;

			&:checked ~ #nav,
			~ #nav {
				height: max-content;
				gap: 2rem;
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
