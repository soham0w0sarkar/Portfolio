<script>
	import { IconX, IconMinus, IconMaximize, IconMinimize } from '@tabler/icons-svelte';

	let showCloseButtonIcon = false;
	let showSizeButtonIcon = false;
	let showMinimiseButtonIcon = false;

	let maximise = false;
</script>

<div
	class="flex flex-col items-start variant-glass-surface rounded-lg overflow-hidden transition-all duration-200 ease-in-out {maximise
		? 'w-1/2 h-1/2'
		: 'w-full h-full'}"
>
	<div class="w-full h-fit variant-filled-surface p-2">
		<div class="flex justify-between items-center h-full w-full">
			<div class="w-full h-full text-center font-extrabold">Terminal</div>
			<span class="h-full w-fit flex p-1">
				<button
					class="w-4 h-4 bg-yellow-500 rounded-full mr-2 flex justify-center items-center shadow-md"
					on:mouseenter={() => {
						showMinimiseButtonIcon = true;
					}}
					on:mouseleave={() => {
						showMinimiseButtonIcon = false;
					}}
				>
					{#if showMinimiseButtonIcon}
						<IconMinus size={12} stroke={3} color={'black'} />
					{/if}
				</button>
				<button
					class="w-4 h-4 bg-green-500 rounded-full mr-2 flex justify-center items-center shadow-md"
					on:click={() => {
						maximise = !maximise;
						showSizeButtonIcon = false;
					}}
					on:mouseenter={() => {
						showSizeButtonIcon = true;
					}}
					on:mouseleave={() => {
						showSizeButtonIcon = false;
					}}
				>
					{#if showSizeButtonIcon}
						{#if maximise}
							<IconMaximize size={12} stroke={3} color={'black'} />
						{:else}
							<IconMinimize size={12} stroke={3} color={'black'} />
						{/if}
					{/if}
				</button>
				<button
					class="w-4 h-4 bg-red-500 rounded-full flex justify-center items-center shadow-md"
					on:mouseenter={() => {
						showCloseButtonIcon = true;
					}}
					on:mouseleave={() => {
						showCloseButtonIcon = false;
					}}
				>
					{#if showCloseButtonIcon}
						<IconX size={12} stroke={3} color={'black'} />
					{/if}
				</button>
			</span>
		</div>
	</div>
	<div class="w-full h-full p-2 overflow-y-scroll">
		<slot />
	</div>
</div>
