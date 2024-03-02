<script lang="ts">
	import MetaHead from '$lib/MetaHead.svelte';
	import '$lib/fonts/supreme.css';
	import GuideLine from '$lib/svg/GuideLine.svelte';

	function mapValue(value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) {
		// Ensure the value is within the original range
		const clampedValue = Math.min(Math.max(value, fromMin), fromMax);

		// Map the value to the new range
		const mappedValue = ((clampedValue - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;

		return mappedValue;
	}

	$effect(() => {
		let vp = document.getElementById('viewport');
		vp?.classList.add('no-cursor');
		vp?.addEventListener('mousemove', mousemove);

		return () => {
			let vp = document.getElementById('viewport');
			vp?.classList.remove('no-cursor');
			vp?.removeEventListener('mousemove', mousemove);
		};
	});

	let cursor: HTMLDivElement = $state({});
	const cursor_width = `4rem`;
	const timing = {
		duration: 1000,
		iterations: 1
	};

	const mousemove = async (event: MouseEvent) => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		const xNormal = 1;
		const currWidth = `calc(${cursor_width} * ${xNormal})`;
		const xOffset = `calc(${currWidth} / 2)`;

		const movement = [
			{
				left: `calc(${mouseX}px - ${xOffset})`,
				top: `calc(${mouseY}px - ${xOffset})`,
				width: currWidth
			}
		];

		const animation = cursor.animate(movement, timing);

		// sloppy way to do forwards animation
		if (await animation.finished) {
			cursor.style.left = `calc(${mouseX}px - ${xOffset})`;
			cursor.style.top = `calc(${mouseY}px - ${xOffset})`;
			cursor.style.width = currWidth;
		}
	};
</script>

<MetaHead
	description="Yor's Hero home"
	keywords="Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS"
	title="Yor homepage"
/>

<GuideLine />

<div id="viewport">
	<header id="header">
		<div id="logo" class="hero">Yor Qat</div>

		<nav class="links">
			<a href="/blogs">Blogs</a>
			<a href="/mockeries">Work</a>
			<a href="/reach-out">Reach </a>
			<div id="cursor" bind:this={cursor}></div>
		</nav>
	</header>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Archivo&family=Urbanist:wght@100&display=swap');
	a {
		text-decoration: none;
		color: #ddd;
		cursor: none;

		&:hover ~ #cursor {
			--size: 2.5rem;
			rotate: 90deg;
			animation: rotate 5s linear infinite;
			animation-delay: 200ms;
		}
	}

	* {
		box-sizing: border-box;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#cursor {
		--size: 4rem;
		position: fixed;
		// allows us to click through the custom cursor
		pointer-events: none;
		top: 891px;
		left: 471px;

		transition:
			width 200ms,
			rotate 900ms;
		width: var(--size);
		aspect-ratio: 1;

		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23717171FF' stroke-width='7' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='75' stroke-linecap='butt'/%3e%3c/svg%3e");
		border-radius: 100px;
		animation: rotate 15s alternate-reverse infinite;
	}

	#viewport {
		height: 100vh;
		background: #1b1b1b;
	}

	:global(#viewport.no-cursor) {
		cursor: none;
	}

	.links {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 25vh;
		color: #ddd !important;
		font-size: 6rem;
		font-family: 'Archivo', sans-serif;

		left: 57vw;
		top: 5vw;
	}

	.hero {
		font-family: 'Urbanist', sans-serif;
		font-weight: 100;
		font-size: 8rem;
		position: fixed;
		color: #ddd;

		left: 20vw;
		top: 45vh;
	}

	.guides {
		--thickness: 0.01px;
		--length: 150vw;

		border: 10px dashed #444;
		position: fixed;

		&.vert {
			width: var(--thickness);
			height: var(--length);
		}

		&.hor {
			width: var(--length);
			height: var(--thickness);
		}
	}

	#g1 {
		left: 15vw;
	}

	#g2 {
		left: 45vw;
	}

	#g3 {
		top: 15vw;
	}

	#g4 {
		top: 35vw;
	}
</style>
