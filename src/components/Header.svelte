<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  export let title: string
</script>

<header id="app-header">
  <h2>{title}</h2>
  <nav>
    <div class="menu-toggle" role="button">
      <span>Menu</span>
      <Fa class="icon" icon={faBars} style="margin-right: 0.5rem" />
    </div>
  </nav>
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
    background: linear-gradient(0deg, $color-extra-deep-purple, 50%, $color-dark);
		box-shadow: 0 1rem 1rem rgba(0,0,0,0.3);

    h2 {
      @include font-dm-sans;
      color: $color-near-white;
      padding: 1rem;
      margin: 0;
    }

    nav {
      .menu-toggle {
        text-decoration: none;
        color: $color-white;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }

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

      &:hover, &.active {
        span {
          color: $color-contrast-second;
        }
      }
    }
    
  }
</style>