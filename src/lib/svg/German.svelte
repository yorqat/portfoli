<script lang="ts">
	const { label = '' } = $props()

	let lang: 'EN' | 'DE' = 'EN'

	const onclick = () => {}
	const keydown = () => {}
</script>

<label id={label} for="{label}-input">{label}</label>

<div
	class="german-eng"
	id="{label}-input"
	{onclick}
	on:keydown={keydown}
	role="switch"
	aria-labelledby={label}
	aria-checked={lang}
	tabindex="0"
>
	<span class="lang en">EN</span>
	<span class="separator"> | </span>
	<span class="lang de">DE</span>
</div>

<style>
	.separator {
		font-size: 2rem;
	}

	.en {
		color: var(--clr2);
	}

	.de {
		color: var(--clr);
	}

	.german-eng {
		width: 3.25rem;
		display: flex;
		align-items: center;
	}
</style>
