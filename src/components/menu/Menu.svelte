<!-- Menu Wrapper Component -->
<script lang="ts">
  import { slide, fade } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  import { animateDuration } from '@services/static'
  import { menu } from '@services/store'

  import Tile from '@components/menu/Tile.svelte'

  let visible: boolean = false
  const animateDurationMultiplier = 1.25
  menu.subscribe(v => visible = v)

  /**
   * Animates the menu
   * @param node - Wrapper HTML Element
   * @param options - Svelte Slide parameters
   */
   const fadeSlide = (node: Element) => {
    const slideTransition = slide(node, {
      duration: animateDuration * animateDurationMultiplier
    })
    return {
      duration: animateDuration,
      easing: cubicOut,
      css: (tick: number) => `
        ${slideTransition.css(tick, 0)};
        opacity: ${tick * 100};
      `
    }
  }
</script>

{#if visible}
  <div id="overlay-wrapper"
    on:click={menu.toggle}
    on:keydown={menu.toggle}
    transition:fade>
    
    <nav id="menu"
      transition:fadeSlide>

      <Tile label="About" />
      <Tile label="Portfolio" />
      <Tile label="Booking" />
      <Tile label="Contact" />
      <Tile label="Login" login="{true}" />

    </nav>
  </div>
{/if}

<style lang="scss">
  @import '../../styles/transitions';

  #overlay-wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background: rgba(0,0,0,0.5);
  }

  #menu {
    position: absolute;
    top: 3.5rem;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
  }
</style>