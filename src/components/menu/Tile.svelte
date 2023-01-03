<!-- Single Tile in the Menu -->
<script lang="ts">
  export let label: string
  export let login: boolean = false
  export let routePath: string
</script>

<a href="{routePath}" class="nav-tile {login ? 'login' : ''}">
  <span>{label}</span>
</a>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/typography';
  @import '../../styles/transitions';

  .nav-tile {
    position: relative;
    z-index: 1000;
    clip-path: polygon(0% 0%, 15% 85%, 100% 100%, 100% 0%);
    width: 100%;
    background: $color-extra-deep-purple;
    @include transition-ease-in-out;
    transform: scale(1) translateX(0);
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
      transform: scale(1.25) translateX(-1.5rem);
      
      span {
        background: $color-near-black;
        color: $color-contrast-second;
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