<!-- Button to toggle menu state -->
<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'

  import { menu } from '@services/store'
</script>

<nav>
  <div class="menu-toggle" role="button" on:click={menu.toggle} on:keydown={menu.toggle}>
    <span>Menu</span>
    <Fa class="icon" icon={faBars} style="margin-right: 0.5rem" />
  </div>
</nav>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/typography';
  @import '../styles/transitions';

  .menu-toggle {
    position: relative;
    z-index: 10000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: $color-white;
    @include transition-ease-in-out;
    cursor: pointer;

    span {
      display: inline;
      padding: 1rem;
      padding-right: 0.5rem;
      @include font-krona-one;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      @include transition-ease-in-out;
    }

    &:hover span {
      color: $color-contrast-second;
    }
  }
</style>