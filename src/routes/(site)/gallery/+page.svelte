<script lang="ts">
	import MetaHead from '$lib/MetaHead.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	const duration = 3;

	let scene: THREE.Scene;
	let geometry: THREE.SphereGeometry;
	let material: THREE.MeshStandardMaterial;
	let renderer: THREE.WebGLRenderer;

	let camera: THREE.PerspectiveCamera;

	// sizes
	const sizes = $state({
		width: window.innerWidth,
		height: window.innerHeight
	});

	function onresize() {
		// update sizes
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;
		// update camera
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();
		renderer.setSize(sizes.width, sizes.height);
	}

	$effect(() => {
		// scene
		scene = new THREE.Scene();
		geometry = new THREE.SphereGeometry(3, 64, 64);
		material = new THREE.MeshStandardMaterial({
			color: '#0083FF',
			roughness: 0.5
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		// camera
		camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
		camera.position.z = 20;
		scene.add(camera);

		// light
		const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
		light.position.set(10, 10, 0);
		scene.add(light);

		// renderer
		const canvas = document.querySelector('.webgl');
		renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setPixelRatio(2);
		renderer.setSize(sizes.width, sizes.height);
		renderer.render(scene, camera);

		// controls
		const controls: OrbitControls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.enablePan = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 8.0;
		let stop = false;

		const loop = () => {
			controls.update();
			renderer.render(scene, camera);
			if (!stop) {
				window.requestAnimationFrame(loop);
			}
		};

		loop();

		const tl = gsap.timeline({ defaults: { duration: 0.25 } });
		tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
	});
</script>

<svelte:window {onresize} />

<MetaHead
	description="Satisfying Yor Graphics"
	keywords="Web, Framework, Frontend, CSS, JS"
	title="Yor gallery"
/>

<canvas class="webgl"></canvas>

<style lang="scss">
	.webgl {
		position: fixed;
		width: 100vw;
		height: 100vh;
		grid-area: 2 / 1 / 2 / 3;
	}
</style>
