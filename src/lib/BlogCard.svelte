<script lang="ts">
	const { tags, title, author, anchor } = $props<{
		tags: string[];
		title: string;
		author: string;
		anchor: string;
	}>();

	import '$lib/blogs.css';
</script>

<a class="blog-card-item-container" href={anchor}>
	<article class="blog-card-item">
		<h2 class="blog-card-item__title">{title}</h2>
		<ul class="blog-card-item__tags">
			{#each tags as tag}
				<li class="blog-card-item__tags__tag">{tag}</li>
			{/each}
		</ul>
		<p class="blog-card-item__author">{author}</p>
	</article>
</a>
