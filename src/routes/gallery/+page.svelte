<script type="ts">
	import MetaHead from '$lib/MetaHead.svelte';
	import gsap from 'gsap';

	$effect(() => {
		const tl = gsap.timeline();
		const duration = 1;
		const ctx = gsap.context(() => {
			tl.from('.box', {
				duration,
				opacity: 0
			})
				.from(
					'.box',
					{
						duration,
						bottom: 200,
						rotate: 0,
						ease: 'bounce.out'
					},
					`-=${duration * 0.75}`
				)
				.to(
					'.box2',
					{
						duration,
						rotate: 180,
						left: 300,
						top: 300
					},
					`-={duration * 0.80}`
				);
		});

		return () => {
			ctx.revert();
		};
	});
</script>

<MetaHead
	description="Satisfying Yor Graphics"
	keywords="Web, Framework, Frontend, CSS, JS"
	title="Yor gallery"
/>

<div class="box"></div>
<div class="box2"></div>

<style>
	.box {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 100px;
		background: black;
	}

	.box2 {
		position: absolute;
		top: 0;
		background: tomato;
		width: 100px;
		height: 100px;
	}
</style>
