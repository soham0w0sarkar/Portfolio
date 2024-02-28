<script>
	import Start from './../assests/start.svelte';
	import Folder from './../assests/folder.svelte';
</script>

<div class="h-full w-16 fixed left-0 parent z-10">
  <div class="h-full w-full variant-glass-surface p-2">
    <button title="Application" class="w-full h-12 mt-2 mb-3"><Start /></button>
    <button title="About" class="w-full h-12  mt-56 mb-5 rounded-full"><Folder /></button>
    <button title="Projects" class="w-full h-12  mb-5 rounded-full"><Folder /></button>
    <button title="Skills" class="w-full h-12  mb-5 rounded-full"><Folder /></button>
    <button title="Education" class="w-full h-12  mb-5 rounded-full"><Folder /></button>
  </div>
</div>

<style>
    .variant-glass-surface {
		transform: translateX(-120%);
		transition: transform 0.3s ease-in-out;
	}
	.parent:hover .variant-glass-surface {
		transform: translateX(0);
	}
</style>