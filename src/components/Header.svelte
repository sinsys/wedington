<!-- Header wrapper component -->
<script lang="ts">
  import { title } from '@services/static'

  import MenuToggle from '@components/MenuToggle.svelte'
</script>

<header id="app-header">
  <h2>{title}</h2>
  <MenuToggle />
</header>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/typography';

  #app-header {
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(0deg, $color-extra-deep-purple, 70%, $color-extra-lilac);
		box-shadow: 0 1rem 1rem rgba(0,0,0,0.3);

    h2 {
      @include font-federo;
      color: $color-near-white;
      padding: 1rem;
      margin: 0;
      font-size: 1.5rem;
    }
  }
</style>