<script>
	import MetaHead from '$lib/MetaHead.svelte'
	import BlogChapters from '$lib/BlogChapters.svelte'
	export const tags = ['gaming', 'game dev', 'devlog']
	const chapters = [['Intro', 'ECS', 'Bevy']]
	const bevy_code_1 =
		'use bevy::prelude::*;\n\npub fn move_forward(\n  time: Res<Time>,\n  key_in: Res<Input<KeyCode>>,\n  mut player: Query<&mut Transform, With<Player>>,\n) {\n  if key_in.pressed(KeyCode::W) {\n    let mut player = player.single_mut();\n    player.translation.z += time.delta_seconds();\n  }\n}'

	import '$lib/styles/view-transition.css'
	import { setupViewTransition } from 'sveltekit-view-transition'
	const { transition } = setupViewTransition()
</script>

<MetaHead
	title="First coob devlog"
	description="So right off the bat, this isn't intended to be a minecraft clone, just that..."
	image="/coob/grash-block.webp"
/>

<BlogChapters {chapters} />

<section class="section container">
	<h1 class="section-title">Coob's first devlog</h1>
	<div class="tags">
		{#each tags as tag}
			<a href="/blog" class="tag">{tag}</a>
		{/each}
	</div>

	<img
		class="img"
		src="/coob/grash-block.webp"
		alt="grash block from coob game"
		use:transition={'grashblock'}
	/>
	<p id="0.0">
		So right off the bat, this isn't intended to be a minecraft clone, just that block worlds are
		simple enough to create the open world experience.
	</p>

	<p>
		I like rust, it seems to be a promising programming language. Its robust language development
		was derived from previous languages that caused painstaking technical debt; and the ecosystem
		has grown mature over the years.
	</p>

	<h2 id="0.1" class="section-title">Entity - Component - System</h2>

	<p>
		Our sandbox game will be written with bevy, a feature-rich data-driven framework in rust that
		uses the ECS architecture. ECS is just an approach where composition is the pattern rather than
		inheritance, basically no more vague look ups of tightly coupled behavior and entity state for
		every class it derived from.
	</p>
	<p>
		You'd <em>attach</em> components (like Transform, Velocity, etc) to an entity (which is just an ID)
		and add a system to transform your components (in this case, doing physics) for you. No more attaching
		individual scripts for a specific entity when you can just query for the relevant components.
	</p>
	<p>
		Components are also stored contiguously, which is cache-friendly and can be fast as heck so
		that's always a plus.
	</p>
</section>

<section class="section container">
	<h2 id="0.2" class="section-title">Bevy</h2>
	<p>
		Bevy's ECS is only a small but critical part of the framework. It also abstracts a lot of
		features that you'd expect from a game engine like Input events and Window properties.
	</p>
	<pre class="section-code">{bevy_code_1}</pre>
	<p>
		This benign code shows how to move a Player farther from the screen by pressing <em>W</em>.
	</p>
	<p>
		This is suprisingly simple and modular. Everytime I add a new behavior, it can just exist in
		another system.
	</p>
</section>
