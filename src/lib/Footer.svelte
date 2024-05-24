<script>
	import Github from '$lib/svg/Github.svelte'
	import Linkedin from '$lib/svg/Linkedin.svelte'
	import Twitter from '$lib/svg/Twitter.svelte'

	const twitter = 'https://twitter.com/aurora_paisley'
	const github = 'https://github.com/yorqat'
	const linkedin = 'https://www.linkedin.com/in/aurora-paisley-7aba962b2/'
</script>

<footer>
	<div class="container">
		<div class="note">
			<!-- TODO: leave message here -->
		</div>
		<div class="socials">
			<a href={github} aria-label="Learn more in my github profile" target="_blank">
				<Github />
			</a>
			<a href={linkedin} aria-label="Recruit me in LinkedIn" target="_blank">
				<Linkedin />
			</a>
			<a href={twitter} aria-label="See my opinions on current tech industry" target="_blank">
				<Twitter />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		font-size: 0.9rem;
		font-family: sans-serif;
		padding: 1rem;
		background-color: var(--bg2);
	}

	a {
		color: unset;
		display: inline-block;
		width: max-content;
		aspect-ratio: 1;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.socials {
		display: flex;
		gap: 0.75rem;
	}
</style>
