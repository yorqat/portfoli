<script lang="ts">
	const {
		tags,
		title,
		anchor,
		author = 'Yor Qat',
		thumbnail,
		transitionThumbnail
	} = $props() as {
		tags: string[]
		title: string
		anchor: string
		author: string
		thumbnail: string | undefined
		transitionThumbnail: any
	}

	import '$lib/styles/blog.css'
	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()
</script>

<a class="blog-card-item-container" href="/blog/{anchor}">
	<article class="blog-card-item">
		<h2 class="blog-card-item__title">{title}</h2>
		<ul class="blog-card-item__tags">
			{#each tags as tag}
				<li class="blog-card-item__tags__tag">{tag}</li>
			{/each}
		</ul>
	</article>
	{#if thumbnail}
		<img
			loading="lazy"
			class="blog-card-thumbnail"
			src={thumbnail}
			alt="grash block"
			use:transition={transitionThumbnail}
		/>
	{/if}
</a>
