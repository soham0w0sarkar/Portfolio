<div class="lds-grid">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

<style>
	.lds-grid,
	.lds-grid div {
		box-sizing: border-box;
	}
	.lds-grid {
		display: inline-block;
		position: relative;
		width: 12px;
		height: 24px;
	}
	.lds-grid div {
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
		animation: lds-grid 1.2s linear infinite;
	}
	.lds-grid div:nth-child(1) {
		top: 0;
		left: 0;
		animation-delay: 0s; /* Adjusted delay for first circle */
	}
	.lds-grid div:nth-child(2) {
		top: 0;
		left: 12px;
		animation-delay: 0.2s; /* Adjusted delay for second circle */
	}
	.lds-grid div:nth-child(3) {
		top: 12px;
		left: 12px;
		animation-delay: 0.4s; /* Adjusted delay for third circle */
	}
	.lds-grid div:nth-child(4) {
		top: 24px;
		left: 12px;
		animation-delay: 0.6s; /* Adjusted delay for fourth circle */
	}
	.lds-grid div:nth-child(5) {
		top: 24px;
		left: 0;
		animation-delay: 0.8s; /* Adjusted delay for fifth circle */
	}
	.lds-grid div:nth-child(6) {
		top: 12px;
		left: 0;
		animation-delay: 1s; /* Adjusted delay for sixth circle */
	}
	@keyframes lds-grid {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(0.8);
		}
	}
</style>
