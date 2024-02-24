<script lang="ts">
	let aria_disabled = $state(true);

	$effect(() => {
		aria_disabled = false;
	});

	const cycleDefault = () => {
		if (!aria_disabled) {
			switch (checked) {
				case 'true':
					checked = 'false';
					break;
				case 'false':
					checked = 'mixed';
					break;
				case 'mixed':
					checked = 'true';
					break;
			}
		}
	};

	let { cycle = cycleDefault, label = '', logic, checked = 'mixed' } = $props();

	const onclick = () => {
		cycle();
		logic(checked);
	};

	const keydown = (e: KeyboardEvent) => {
		if (e.key === ' ') {
			cycle();
			logic(checked);
		}
	};
</script>

<label id={label} for="{label}-input">{label}</label>

<div
	id="{label}-input"
	{onclick}
	on:keydown={keydown}
	class="toggle"
	role="switch"
	aria-labelledby={label}
	aria-checked={checked}
	aria-disabled={aria_disabled}
	tabindex="0"
>
	<div class="indicator"></div>
</div>

<style lang="scss">
	label {
		text-transform: capitalize;
	}

	.toggle {
		width: 3rem;
		height: 1.6rem;
		border-radius: 16px;
		border: 1px solid var(--bg2);
		background-color: var(--clr2);
		overflow: hidden;

		position: relative;
		padding: 0.25rem;
		cursor: pointer;

		&[aria-checked='true'] .indicator {
			left: 1.75rem;
		}

		&[aria-checked='false'] .indicator {
			left: 0.25rem;
		}

		&[aria-checked='mixed'] .indicator {
			background-color: var(--bg2);
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			border-radius: 0;
			top: 0;
			left: 0;

			&::after {
				content: 'auto';
				position: absolute;
				font-size: 0.9rem;
			}
		}

		&[aria-disabled='true'] {
			background-color: var(--clr);
		}

		&[aria-disabled='true'] .indicator {
			background-color: var(--bg);
		}

		&:hover {
			filter: brightness(0.9);
			// border: 1px var(--clr2) dashed;
		}
	}

	.indicator {
		--transition: left 300ms ease-in, top 400ms ease-out, width 400ms ease-out,
			height 400ms ease-out;

		position: absolute;
		background-color: var(--bg2);
		aspect-ratio: 1;
		width: 1rem;
		border-radius: 50%;

		transition: var(--transition);

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
