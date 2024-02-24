<script>
	import '$lib/fonts/Afacad-Variable.css';
</script>

<a href="#content">Skip to main content</a>

<style>
	a {
		display: block;
		position: absolute;
		padding: 0.5rem;
		margin: 0.25rem;
		background-color: var(--bg);
		color: white;
		font-size: 1.2rem;
		font-family: 'Afacad-Variable700', sans-serif;
		font-weight: 800;
		text-decoration: none;
		text-transform: uppercase;
		transform: translateY(-200%);
		transition: transform 200ms;
		text-align: center;

		z-index: 2;
		grid-area: 1 / 1 / 2 / 4;

		background-color: var(--bg2);
		padding: 1.2rem 1rem;
		width: 20rem;
		background-color: var(--header-bg);
	}

	a:focus {
		transform: translateY(0);
	}
</style>
