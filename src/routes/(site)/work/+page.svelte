<script>
	import MetaHead from '$lib/MetaHead.svelte'

	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()

	import '$lib/styles/active-nav/work.css'
</script>

<MetaHead
	description="Yor's creative for imaginary companies and products"
	keywords="Web, Framework, Frontend, CSS, JS"
	title="Yor mockups"
/>

<section class="container">
	<h1>Products</h1>
	<ul class="products"></ul>
</section>

<section class="container">
	<h1>Youtube</h1>
	<div class="implied-consent" title="">
		<p>
			<span class="info-icon">🛈</span>
			<strong>Implied Consent for Data Collection:</strong>
		</p>

		<p>
			Interacting with an embedded YouTube video implies your consent to the collection and
			processing of your data by YouTube and its parent company, Google LLC, as outlined in their
			Privacy Policies.
		</p>
	</div>
	<ul class="videos">
		<li class="video-card">
			<iframe
				src="https://www.youtube-nocookie.com/embed/VDQd9SyD6p4?si=RlN6W-nRlGIvluBR"
				title="YouTube video player"
				frameborder="0"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</li>
		<li class="video-card">
			<iframe
				src="https://www.youtube-nocookie.com/embed/9dgvhonI7O0?si=IkqXPlcTNR_i5CF2"
				title="YouTube video player"
				loading="lazy"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</li>
		<li class="video-card">
			<iframe
				src="https://www.youtube-nocookie.com/embed/9dgvhonI7O0?si=IkqXPlcTNR_i5CF2"
				title="YouTube video player"
				loading="lazy"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</li>
	</ul>
</section>

<style>
	.implied-consent {
		width: 40ch;
		line-height: 1.6rem;
		background-color: var(--bg2);
		padding: 1.5rem 2rem;
		border-radius: 8px;
	}
	.info-icon {
		height: 2rem;
		color: rgb(255, 201, 24);
	}

	.videos,
	.products {
		display: flex;
		gap: clamp(0rem, 5vw, 1.2rem);

		flex-wrap: wrap;
	}

	.video {
		height: clamp(10rem, 15vw, 11rem);
		aspect-ratio: 16 / 9;
		background-color: var(--bg2);
	}

	li.video-card {
		list-style-type: none;
		width: 560px;
		height: 315px;
	}

	li.video-card iframe {
		width: 100%;
		height: 100%;
	}
</style>
