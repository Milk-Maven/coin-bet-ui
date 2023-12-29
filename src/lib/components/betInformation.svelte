<script>
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleSubmit() {
		// Create an object with the entered values

		// Emit the betRequestCreated event with the created object
		dispatch('betInformation', 'todo');

		// Clear the form fields
	}
</script>

<main id="main" class="">asdf</main>

<style lang="postcss">
	button {
		background: #cd7f32; /* Bronze Color for Submit Button */
		color: #fff8dc;
	}
	.modal {
		background: #8b4513; /* Grayish Dialog Background */
		/* Add additional styling for padding, border-radius, etc. */
	}
</style>
