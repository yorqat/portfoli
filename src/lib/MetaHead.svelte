<script lang="ts">
	const {
		title = 'Yor Qat page',
		description = "You're in a Yor website",
		keywords = 'Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS',
		author = 'Yor Qat',
		image = '/favicon.svg'
	} = $props() as {
		title: string;
		description: string;
		keywords: string;
		author: string;
		image: string;
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />

	<!-- Open graph supports discord and twitter -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:type" content="website" />
	<!-- {@render children()} -->
</svelte:head>
