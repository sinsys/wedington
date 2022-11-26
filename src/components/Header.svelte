<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  export let title: string
</script>

<header id="app-header">
  <h2>{title}</h2>
  <nav>
    <a href="/">
      <span>Menu</span>
      <Fa class="icon" icon={faBars} style="margin-right: 0.5rem" />
    </a>
  </nav>
</header>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/typography';
  #app-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(0deg, $color-near-black, 50%, $color-dgray);
		box-shadow: 0 1rem 1rem rgba(0,0,0,0.3);

    h2 {
      color: $color-near-white;
      padding: 1rem;
      margin: 0;
    }

    nav {

      a {
        text-decoration: none;
        color: $color-white;
        transition: all 1s ease-in-out;
      }

      span {
        display: inline;
        padding: 1rem;
        padding-right: 0.5rem;
        @include font-dm-sans;
        color: $color-lgray;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.5s ease-in-out;
      }

      &:hover, &:active, &.active {
        a, span {
          color: $color-extra-lilac;
        }
      }
    }
  }
</style>