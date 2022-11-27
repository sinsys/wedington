<!-- Single Tile in the Menu -->
<script lang="ts">
  import { menu } from '@services/store'
  export let label: string
  export let login: boolean = false
</script>

<div class="nav-tile {login ? 'login' : ''}" on:click={menu.toggle} on:keydown={menu.toggle}>
  <span>{label}</span>
</div>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/typography';
  @import '../../styles/transitions';
  .nav-tile {
    clip-path: polygon(0% 0%, 15% 85%, 100% 100%, 100% 0%);
    width: 100%;
    background: $color-extra-deep-purple;
    @include transition-ease-in-out;
    transform: scale(1);
    cursor: pointer;

    span {
      color: $color-lgray;
      padding: 3vh 4rem;
      font-size: 1.25rem;
      @include font-krona-one;
      display: block;
      width: 100%;
      @include transition-ease-in-out;
    }

    &:hover {
      clip-path: polygon(15% 15%, 15% 85%, 100% 100%, 100% 0%);
      transform: scale(1.25);
      
      span {
        color: $color-near-black;
        background: $color-contrast-second;
      }
    }

    &.login {
      span {
        background: $color-contrast-fourth;
        color: $color-lgray;
      }

      &:hover span {
        background: $color-near-black;
        color: $color-contrast-second;
      }
    }
  }
</style>