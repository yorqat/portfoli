<script>
	import MetaHead from '$lib/MetaHead.svelte'
	import BlogCard from '$lib/BlogCard.svelte'

	import '$lib/styles/view-transition.css'
	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()
	import '$lib/styles/blog.css'
</script>

<MetaHead
	description="What Yor has to say"
	keywords="Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS"
	title="Yor blogs"
/>

<aside class="directory">
	<h1>Tags</h1>
</aside>

<div class="content">
	<section class="section">
		<h1 class="section-title">Yor Blogs</h1>
		<!-- <p>
				Have a peek into my mind, sometimes might be innaccurate, but that's why we're all here.
				Innaccuracies are meant to be improved upon so thank you for contributing
			</p>
			<p>
				Immerse yourself with all the info I compiled and activities I've documented, might learn a
				thing or two, from me or from you. Have fun :>
			</p>
			<pre class="section-code">$ echo 'This is what code may look like'</pre> -->
	</section>

	<div class="blog-card-items">
		<!-- <BlogCard
			anchor="/blog/gsap-tl-tricks"
			title={'Using GSAP timeline for animations'}
			tags={['css', 'web dev']}
		/>
		<BlogCard
			anchor="/blog/gsap-flip-tricks"
			title={'Using GSAP FLIP for transitions'}
			tags={['css', 'web dev']}
		/> -->
		<BlogCard
			anchor="coob-devlog-01"
			title={'First coob devlog'}
			tags={['gaming', 'game dev', 'devlog']}
			thumbnail="coob/grash-block.webp"
			transitionThumbnail="grashblock"
		/>
		<BlogCard
			anchor="bypass-isp-how-to"
			title={'How to bypass ISP port blocking'}
			tags={['wireguard', 'linode', 'web dev', 'linux']}
		/>
	</div>
</div>

<style>
</style>
