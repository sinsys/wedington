<script lang="ts">
	import Header from '@components/Header.svelte'
	const title = 'Wedington Photography'
</script>

<main id="app-wrapper">
	<Header {title} />
</main>

<style lang="scss">
	@import './styles/colors';
	#app-wrapper {
		background-image: linear-gradient(32.5deg, $color-extra-deep-purple, 50%, $color-extra-lilac);
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
</style>
