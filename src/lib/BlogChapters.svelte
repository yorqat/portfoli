<script lang="ts">
	interface Chapters {
		chapters: string[][];
	}

	const { chapters } = $props<Chapters>();
</script>

<aside class="directory chapters">
	<h2 class="blog-chapter-title">Chapters</h2>
	<div class="blog-chapters">
		{#each chapters as bigChapter, bigIndx}
			{#each bigChapter as subChapter, smolIndx}
				<div class="chapter">
					<a href="#{bigIndx}.{smolIndx}">{subChapter} {bigIndx}.{smolIndx}</a>
				</div>
			{/each}
			<div class="chapter-blank"></div>
		{/each}
	</div>
</aside>

<style>
	a {
		display: inline-block;
		width: 100%;
		padding: 0.5rem 2rem;
	}
</style>
