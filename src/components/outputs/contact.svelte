<script>
	import { tick } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	let showEmail = false;
	let showMessage = false;

	let respose = '';

	const focus = () => {
		const inputElements = document.querySelectorAll('input');
		console.log(inputElements);
		inputElements[inputElements.length - 1]?.focus();
	};

	const handleSendMail = async () => {
		const response = await fetch('/api/sendMail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, message })
		});
		const data = await response.json();
		respose = data;
	};
</script>

<div class="w-full text-3xl h-96 p-2 form">
	<h1>Contact me</h1>
	<span class="flex">
		<h2>Name:</h2>
		&nbsp;
		<input
			type="text"
			class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
			bind:value={name}
			readonly={showEmail ? true : false}
			on:keypress={async (e) => {
				if (e.key === 'Enter') {
					showEmail = true;
					await tick();
					focus();
				}
			}}
		/>
	</span>
	{#if showEmail}
		<span class="flex">
			<h2>Email:</h2>
			&nbsp;
			<input
				type="email"
				class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
				bind:value={email}
				readonly={showMessage ? true : false}
				on:keypress={async (e) => {
					if (e.key === 'Enter') {
						showMessage = true;
						await tick();
						focus();
					}
				}}
			/>
		</span>
	{/if}
	{#if showMessage}
		<span class="flex flex-col">
			<h2>Message:</h2>
			<input
				type="text"
				class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
				bind:value={message}
				on:keypress={async (e) => {
					if (e.key === 'Enter') {
						await handleSendMail();
					}
				}}
			/>
		</span>
	{/if}
	{#if respose}
		<span>{respose}</span>
	{/if}
</div>
