<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main class="main">
		{@render children()}
	</main>

	<Footer />
</div>

<style>
.main {
	min-height: calc(100vh - var(--footer-height));
}
</style>
