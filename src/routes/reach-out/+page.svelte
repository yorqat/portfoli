<script>
	import MetaHead from '$lib/MetaHead.svelte';
	import Send from '$lib/svg/Send.svelte';
	import Linkedin from '$lib/svg/LinkedinButton.svelte';

	import '$lib/fonts/HammersmithOne.css';
	import '$lib/fonts/supreme.css';
</script>

<MetaHead
	description="Contact Yor for work"
	keywords="Hire, Developer, Work, Reach"
	title="Reach Yor developer"
/>

<div class="separator">
	<h1>Reach instantly</h1>
	<p>through these platforms</p>
</div>

<a href="mailto:dev.yorqat@gmail.com">
	<Send />
	<h3>Compose</h3>
</a>

<a href="mailto:dev.yorqat@gmail.com">
	<Linkedin />
	<h3>Connect</h3>
</a>

<div class="separator">
	<h1>Or hear back from me</h1>
	<p>by verifying your email</p>
</div>

<form>
	<label for="email" id="email-label"> Email </label>
	<input type="email" name="email" id="email" placeholder="katzen@email.com" />
	<label for="text" id="text-label"> Message </label>
	<textarea
		name="text"
		id="text"
		placeholder="hallo there, wie mochte dir Entwickler skills. Bitte arbeiten hier bitte bitte bitte "
	></textarea>
	<button type="submit">Send</button>
</form>

<style>
	* {
		font-family: 'Gugi', sans-serif;
		font-family: 'HammersmithOne', sans-serif;
	}

	button {
		grid-area: 4 / 1 / 4 / 3;
	}

	.separator {
		padding-top: 2rem;
	}

	h1 {
		line-height: 10%;
		color: var(--clr2);
		font-family: 'Supreme-Light', sans-serif;
	}

	p {
		letter-spacing: 1.25px;
	}

	label {
		padding: 1.2rem 1.8rem;
		/* text-align: center; */
	}

	#email-label {
		grid-area: 1 / 1 / 2 / 2;
	}

	#text-label {
		grid-area: 2 / 1 / 3 / 3;
	}

	#text {
		grid-area: 3 / 1 / 4 / 3;
		resize: none;
		min-height: 20rem;

		padding: 2rem;
		font-size: 2rem;
	}

	button {
		border: unset;
		text-align: center;

		color: var(--bg2);
		background-color: var(--clr);
		/* border-radius: 12px; */
		padding-block: 2rem;
		cursor: pointer;
	}

	a:hover,
	button:hover {
		background-color: var(--clr2);
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr auto auto;
		/* width: max-content; */

		color: var(--clr);
		background-color: var(--bg2);
		border-radius: 12px;
		max-width: 50rem;
		margin-bottom: 1rem;
	}

	input,
	textarea {
		border-radius: 0;
		border: 4px solid var(--bg2);
		background-color: var(--bg);
		color: var(--clr);
		padding-left: 2rem;
		font-family: 'Supreme-Light', sans-serif;
	}

	input:focus,
	textarea:focus {
		color: var(--clr2);
	}

	a {
		color: var(--clr);
		background-color: var(--bg2);
		display: inline-block;
		width: max-content;
		padding: 2rem 3rem;
		margin-inline: 0.5rem;
		transition: scale 100ms;
		margin-bottom: 2rem;
		text-decoration: unset;
		text-transform: uppercase;
		text-align: center;

		border-radius: 12px;
	}

	a:hover {
		scale: 1.05;
	}

	a:focus,
	button:focus {
		color: var(--bg2);
		background-color: var(--clr2);
	}

	@media (max-width: 400px) {
		form {
			display: flex;
		}
	}
</style>
