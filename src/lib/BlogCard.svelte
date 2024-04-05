<script lang="ts">
	const {
		tags,
		title,
		anchor,
		author = 'Yor Qat',
		thumbnail
		// transition
	} = $props() as {
		tags: string[];
		title: string;
		anchor: string;
		author: string;
		thumbnail: string | undefined;
		// transition: (
		// 	node: HTMLElement | SVGElement,
		// 	props: string | TransitionAction
		// ) => { update(new_props: string | TransitionAction): void; destroy(): void } | undefined;
	};

	import '$lib/styles/blogs.css';
	import type { TransitionAction } from 'sveltekit-view-transition';
</script>

<a class="blog-card-item-container" href={anchor}>
	<article class="blog-card-item">
		<h2 class="blog-card-item__title">{title}</h2>
		<ul class="blog-card-item__tags">
			{#each tags as tag}
				<li class="blog-card-item__tags__tag">{tag}</li>
			{/each}
		</ul>
		{#if thumbnail}
			<img loading="lazy" class="blog-card-thumbnail" src={thumbnail} alt="grash block" />
		{/if}
	</article>
</a>
