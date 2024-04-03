<script>
	import { IconUserCircle, IconFolderFilled } from '@tabler/icons-svelte';
	import { commandLine } from '$lib/store';
        
</script>

<div>
	{#each $commandLine as line}
		<div class="flex w-full text-3xl font-bold flex-col p-2">
                        <div class="flex text-lg items-end">
                                <IconUserCircle color={'green'} size={28}/> runner on <IconFolderFilled color={'blue'} size={28}/>
                        </div>
			<span>
				{#if line.status === 'current'}
					<span class="text-lg text-yellow-500">#</span>
				{:else if line.status === 'success'}
					<span class="text-2xl text-blue-500">&nbsp;portfolio</span>
				{:else}
					<span class="text-2xl text-blue-500">&nbsp;portfolio</span>
				{/if}
			</span>
		</div>
	{/each}
</div>
