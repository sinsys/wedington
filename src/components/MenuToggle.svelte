
<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import { menu } from '@services/store'

  function toggleMenu () {
    menu.toggle()
  }
</script>

<nav>
  <div class="menu-toggle" role="button" on:click={toggleMenu} on:keydown={toggleMenu}>
    <span>Menu</span>
    <Fa class="icon" icon={faBars} style="margin-right: 0.5rem" />
  </div>
</nav>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/typography';
  .menu-toggle {
    text-decoration: none;
    color: $color-white;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    span {
      display: inline;
      padding: 1rem;
      padding-right: 0.5rem;
      @include font-krona-one;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
    }

    &:hover span {
      color: $color-contrast-second;
    }
  }
</style>