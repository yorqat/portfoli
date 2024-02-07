<script>
	import MetaHead from '$lib/MetaHead.svelte';
	import BlogCard from '$lib/BlogCard.svelte';
</script>

<MetaHead
	description="What Yor has to say"
	keywords="Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS"
	title="Yor blogs"
/>

<section class="section container">
	<h1 class="section-title">Yor Blogs</h1>
	<p>
		Have a peek into my mind, sometimes might be innaccurate, but that's why we're all here.
		Innaccuracies are meant to be improved upon so thank you for contributing
	</p>
	<p>
		Immerse yourself with all the info I compiled and activities I've documented, might learn a
		thing or two, from me or from you. Have fun :>
	</p>
	<pre class="section-code">$ echo 'This is what code may look like'</pre>
</section>

<div class="blog-card-items">
	<BlogCard
		anchor="/blogs/gsap-tl-tricks"
		title={'Using GSAP timeline for animations'}
		tags={['css', 'web dev']}
	/>
	<BlogCard
		anchor="/blogs/gsap-flip-tricks"
		title={'Using GSAP FLIP for transitions'}
		tags={['css', 'web dev']}
	/>
	<BlogCard
		anchor="/blogs/coob-devlog-01"
		title={'First coob devlog'}
		tags={['gaming', 'game dev', 'devlog']}
	/>
	<BlogCard
		anchor="/blogs/bypass-isp-how-to"
		title={'How to bypass ISP port blocking'}
		tags={['wireguard', 'linode', 'web dev', 'linux']}
	/>
</div>
