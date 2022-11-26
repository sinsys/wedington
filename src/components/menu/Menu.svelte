<script lang="ts">
  import Tile from '@components/menu/Tile.svelte'
</script>

<nav id="menu">
  <Tile label="About" />
  <Tile label="Portfolio" />
  <Tile label="Booking" />
  <Tile label="Contact" />
  <Tile label="Login" login="{true}" />
</nav>

<style lang="scss">
  #menu {
    overflow: hidden;
    position: absolute;
    top: 3rem;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    opacity: 0.8;
  }
</style>