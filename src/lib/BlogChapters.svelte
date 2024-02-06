<script lang="ts">
	interface Chapters {
		chapters: string[][];
	}

	const { chapters } = $props<Chapters>();
</script>

<table class="chapters">
	<thead>
		<tr>
			<th>Chapter</th>
			<th>Content</th>
		</tr>
	</thead>
	<tbody>
		{#each chapters as bigChapter, bigIndx}
			{#each bigChapter as subChapter, smolIndx}
				<tr class="chapter">
					<td>
						<a class="chapterNo chapter-link" href="#{bigIndx}.{smolIndx}">
							{bigIndx}.{smolIndx}</a
						></td
					>
					<td>
						<a class="chapter-link" href="#{bigIndx}.{smolIndx}">{subChapter}</a>
					</td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>
