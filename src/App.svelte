<script lang="ts">
	import Header from '@components/Header.svelte'
	import Menu from '@components/menu/Menu.svelte'
</script>

<main id="app-wrapper">
	<Header />
	<Menu />
</main>

<style lang="scss">
	@import './styles/colors';
	#app-wrapper {
		overflow: hidden;
		position: relative;
		z-index: 0;
		background-image: linear-gradient(32.5deg, $color-extra-deep-purple, 50%, $color-extra-lilac);
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
</style>
