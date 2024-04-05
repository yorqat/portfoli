<script lang="ts">
	import MetaHead from '$lib/MetaHead.svelte';
	import '$lib/fonts/site-fonts.css';
	import GuideLine from '$lib/svg/GuideLine.svelte';

	function mapValue(value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) {
		// Ensure the value is within the original range
		const clampedValue = Math.min(Math.max(value, fromMin), fromMax);

		// Map the value to the new range
		const mappedValue = ((clampedValue - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;

		return mappedValue;
	}

	import '$lib/styles/reduced-motion.css';
	import '$lib/styles/theme.css';

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

	import { initA11y, type CheckState } from '$lib/a11y';

	let reducedMotionInit: CheckState = $state('mixed');
	let darkInit: CheckState = $state('mixed');

	$effect(() => {
		initA11y(reducedMotionInit, darkInit);

		ensmall_cursor();
	});

	let cursor: HTMLDivElement = $state({});
	let cursor_width = `4rem`;
	const timing = {
		duration: 1500,
		iterations: 1
	};

	const enlarge_cursor = () => {
		cursor_width = `22rem`;
	};

	const ensmall_cursor = () => {
		cursor_width = `7rem`;
	};

	let curr_animation: Animation;

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

		curr_animation = cursor.animate(movement, timing);

		// sloppy way to do forwards animation
		if (await curr_animation.finished) {
			cursor.style.left = `calc(${mouseX}px - ${xOffset})`;
			cursor.style.top = `calc(${mouseY}px - ${xOffset})`;
			cursor.style.width = currWidth;
		}
	};

	import '$lib/styles/view-transition.css';

	import { setupViewTransition } from 'sveltekit-view-transition';
	const { transition } = setupViewTransition();
</script>

<MetaHead
	description="Yor's Hero home"
	keywords="Linux, Developer, Game, Backend, Open source, Web, Framework, Frontend, CSS, JS"
	title="Yor homepage"
/>

<div id="viewport">
	<header id="header" class="home">
		<div use:transition={'logo'} id="logo" class="hero">Yor Qat</div>
		<div class="hero-subtitle">Developer</div>
		<div class="hero-subtitle">UX Designer</div>
		<div use:transition={'a11y'} class="a11y">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 44 44"
				fill="none"
			>
				<defs>
					<clipPath id="clip0_76_81">
						<rect width="44" height="44" fill="white" />
					</clipPath>
				</defs>
				<g clip-path="url(#clip0_76_81)">
					<path
						d="M38.5 9.625C32.7577 11.165 28.2262 12.375 22 12.375C15.7738 12.375 11.2423 11.165 5.5 9.625L4.125 14.0078C8.25 15.7721 12.436 17.0294 16.775 18.5797L12.375 42.625L17.2219 44L21.1406 28.875L22.8594 28.875L26.7781 44L31.625 42.625L27.225 18.5797C31.5614 17.1815 35.75 15.7721 39.875 14.0938L38.5 9.625Z"
						fill="currentColor"
					/>
					<path
						d="M22 9.625C21.0482 9.625 20.1177 9.34275 19.3263 8.81395C18.5349 8.28515 17.9181 7.53354 17.5538 6.65417C17.1896 5.7748 17.0943 4.80716 17.28 3.87363C17.4657 2.9401 17.924 2.08259 18.5971 1.40955C19.2701 0.736511 20.1276 0.278164 21.0611 0.092473C21.9947 -0.0932184 22.9623 0.00208522 23.8417 0.366332C24.721 0.730579 25.4726 1.34741 26.0014 2.13882C26.5303 2.93023 26.8125 3.86068 26.8125 4.8125C26.8111 6.08844 26.3037 7.31172 25.4014 8.21395C24.4992 9.11617 23.2759 9.62364 22 9.625Z"
						fill="currentColor"
					/>
				</g>
			</svg>
		</div>

		<nav class="links">
			<a
				use:transition={'blogs'}
				on:mouseenter={enlarge_cursor}
				on:mouseleave={ensmall_cursor}
				href="/blogs">Blog</a
			>
			<a
				use:transition={'work'}
				on:mouseenter={enlarge_cursor}
				on:mouseleave={ensmall_cursor}
				href="/mockeries">Work</a
			>
			<a
				use:transition={'reach'}
				on:mouseenter={enlarge_cursor}
				on:mouseleave={ensmall_cursor}
				href="/reach-out"
				>Reach
			</a>
		</nav>

		<div id="g1" class="gl" use:transition={'g1'}>
			<GuideLine />
		</div>

		<div id="g2" class="gl" use:transition={'g2'}>
			<GuideLine />
		</div>

		<div id="g3" class="gl" use:transition={'g3'}>
			<GuideLine />
		</div>

		<div id="g4" class="gl" use:transition={'g4'}>
			<GuideLine />
		</div>
		<div id="cursor" bind:this={cursor}></div>
	</header>
</div>

<style lang="scss">
	a {
		text-decoration: none;
		color: var(--clr);
		transition: color 400ms;

		&:hover ~ #cursor {
			// --size: 5rem;
			rotate: 90deg;
			animation: rotate 5s linear infinite;
			animation-delay: 200ms;
			border-width: 0;
		}

		&:hover,
		&:focus {
			color: var(--clr2);
		}
	}

	@keyframes slideFromTop {
		from {
			transform: translateY(-20%);
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
		width: 25rem;
		position: fixed;
		// allows us to click through the custom cursor
		pointer-events: none;
		top: 100%;
		left: 100%;

		transition:
			width 200ms,
			rotate 900ms;

		aspect-ratio: 1;

		border-radius: 100%;
		animation: rotate 15s alternate-reverse infinite;
		background-color: var(--clr2);
		mix-blend-mode: exclusion;
	}

	#viewport {
		height: 100svh;
		background: var(--bg);
	}

	header {
		height: 100%;
		width: 100vw;
		overflow-x: hidden;
		position: relative;
	}

	:global(#viewport.no-cursor) {
		cursor: none;
	}

	.links {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 25vh;
		color: var(--clr) !important;
		font-weight: 100;
		font-size: clamp(3.6rem, 5vw, 6rem);
		font-family: 'archivoregular', sans-serif;

		right: 20vw;
		top: 5vw;
	}

	.hero-subtitle {
		font-family: 'Raleway', sans-serif;
		font-optical-sizing: auto;
		font-weight: 100;
		font-style: italic;
		font-size: 2.5rem;

		text-transform: uppercase;
		text-align: right;
		position: absolute;
		color: var(--clr2);
		right: 67vw;

		--top: 65vh;
		top: var(--top);

		&:nth-child(2) {
			--gap: 3rem;
			top: calc(var(--top) - var(--gap));
		}
	}

	#logo {
		font-family: 'urbanistthin', sans-serif;
		position: fixed;
		color: var(--clr2);

		left: 12vw;
		top: 45vh;
		font-size: clamp(5rem, 10vw, 8rem);
	}

	.a11y {
		aspect-ratio: 1;
		width: 5rem;
		background-color: var(--clr2);
		border-radius: 50%;
		display: grid;
		place-items: center;

		position: fixed;
		top: 36.5rem;
		left: 14.9rem;
	}

	.gl {
		width: 225%;
		position: absolute;
		pointer-events: none;
	}

	#g1 {
		top: 18vw;
	}

	#g2 {
		bottom: 12.5vw;
	}

	#g3 {
		rotate: 90deg;
		left: -75.75vw;
	}

	#g4 {
		rotate: 90deg;
		left: -105.75vw;
	}
</style>
