<script>
	import MetaHead from '$lib/MetaHead.svelte';
	import Linkedin from '$lib/svg/LinkedinButton.svelte';
	import Email from '$lib/svg/Email.svelte';
	import Fiverr from '$lib/svg/Fiverr.svelte';

	import '$lib/fonts/HammersmithOne.css';
	import '$lib/fonts/supreme.css';
	import Nojs from '$lib/svg/Nojs.svelte';
</script>

<MetaHead
	description="Contact Yor for work"
	keywords="Hire, Developer, Work, Reach"
	title="Reach Yor developer"
/>

<div class="separator container">
	<div class="separator__title">Hear back from me <Nojs /></div>
	<div class="separator__subtitle">by verifying your email</div>
</div>

<form class="container unpad">
	<label for="email" id="email-label"> Email </label>
	<input type="email" name="email" id="email" placeholder="bestboss@mail.com" />
	<label for="text" id="text-label"> Message </label>
	<textarea name="text" id="text" placeholder="Love your work! We need your skills in our team."
	></textarea>
	<button type="submit">
		<span class="submit-label"> Send </span>
	</button>
</form>

<div class="separator container">
	<div class="separator__title">Or reach instantly</div>
	<div class="separator__subtitle">through these platforms</div>
</div>

<div class="container">
	<a href="mailto:dev.yorqat@gmail.com" target="_blank">
		<Email />
		<div class="card-caption">Compose</div>
	</a>

	<a href="https://www.linkedin.com/in/aurora-paisley-7aba962b2/" target="_blank">
		<Linkedin />
		<div class="card-caption">Connect</div>
	</a>

	<a
		href="https://www.fiverr.com/aurorapaisley/create-your-unique-and-selling-website"
		target="_blank"
	>
		<Fiverr />
		<div class="card-caption">Comission</div>
	</a>
</div>

<style>
	* {
		font-family: sans-serif;
	}

	button {
		grid-area: 4 / 1 / 4 / 3;
	}

	.separator {
		padding-top: 2rem;
		margin-bottom: 1.75rem;
	}

	.separator__title {
		font-weight: 800;
		font-size: 2rem;
		line-height: 100%;
		color: var(--clr2);
		font-family: sans-serif;
	}

	.separator__subtitle {
		margin-top: 0.5rem;
	}

	.card-caption {
		font-size: 1.2rem;
		padding-block: 1.2rem;
	}

	label {
		padding: 1.2rem 1.8rem;
	}

	#email-label {
		grid-area: 1 / 1 / 2 / 2;
		border-right: 1px solid var(--clr);
	}

	#text-label {
		grid-area: 2 / 1 / 3 / 3;
		border-top: 1px solid var(--clr);
		border-bottom: 1px solid var(--clr);
	}

	#text {
		grid-area: 3 / 1 / 4 / 3;
		resize: none;
		min-height: 20rem;

		padding: 2rem;
		font-size: 2rem;
	}

	.submit-label {
		padding-inline: 0.5rem;
	}

	button {
		border: unset;
		text-align: center;

		color: white;
		background-color: var(--header-bg);
		padding-block: 2rem;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	a:hover {
		color: var(--clr2);
	}

	a:focus {
		background-color: var(--clr2);
		color: var(--bg2);
	}

	.submit-label {
		transition: transform 300ms;
		text-transform: uppercase;
		font-size: 1.25rem;
	}

	button:hover .submit-label {
		transform: scale(1.2);
	}

	form {
		color: var(--clr2);
		background-color: var(--bg2);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr auto auto;

		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 1rem;
		width: 100%;
	}

	input,
	input:-webkit-autofill,
	textarea {
		border: unset;
		background-color: var(--bg2);
		color: var(--clr2);
		padding-left: 2rem;
		font-family: sans-serif;
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
</style>
