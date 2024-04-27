<script>
	import { tick } from 'svelte';
	import { Loader } from '$lib';

	let name = '';
	let email = '';
	let message = '';

	let isNameValid = false;
	let isEmailValid = false;
	let isMessageValid = false;

	let showEmail = false;
	let showMessage = false;

	/**
	 * @type {Response}
	 */
	let respose;

	const focus = () => {
		const inputElements = document.querySelectorAll('input');
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

	$: isEmailValid = !!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
	$: isNameValid = !!name.trim();
	$: isMessageValid = !!message.trim();
</script>

<div class="w-full text-3xl h-96 p-2 form">
	<h1>Contact me</h1>
	<span class="flex">
		<h2 class:shake={!isNameValid} style="color: {isNameValid ? 'white' : 'red'}">Name:</h2>
		&nbsp;
		<input
			type="text"
			class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
			bind:value={name}
			readonly={showEmail ? true : false}
			on:keypress={async (e) => {
				if (e.key === 'Enter' && isNameValid) {
					showEmail = true;
					await tick();
					focus();
				}
			}}
		/>
	</span>
	{#if showEmail}
		<span class="flex">
			<h2 class:shake={!isEmailValid} style="color: {isEmailValid ? 'white' : 'red'}">Email:</h2>
			&nbsp;
			<input
				type="email"
				class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
				bind:value={email}
				readonly={showMessage ? true : false}
				on:keypress={async (e) => {
					if (e.key === 'Enter' && isEmailValid) {
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
			<h2 class:shake={!isMessageValid} style="color: {isMessageValid ? 'white' : 'red'}">
				Message:
			</h2>
			<input
				type="text"
				class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
				bind:value={message}
				on:keypress={async (e) => {
					if (e.key === 'Enter' && isMessageValid) {
						await handleSendMail();
					}
				}}
			/>
		</span>
	{/if}
	{#if respose}
		<p>{respose}</p>
	{:else}
		<Loader />
	{/if}
</div>

<style>
	.shake {
		animation: shake 0.4s ease-in-out;
	}

	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		50% {
			transform: translateX(5px);
		}
		75% {
			transform: translateX(-5px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
