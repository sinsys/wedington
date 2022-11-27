<!-- Menu Wrapper Component -->
<script lang="ts">
  import { slide, SlideParams, fade } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  import { animateDuration } from '@services/static'
  import { menu } from '@services/store'

  import Tile from '@components/menu/Tile.svelte'

  let visible: boolean = false
  menu.subscribe(v => visible = v)

  /**
   * Animates the menu in and out
   * @param node - Wrapper HTML Element
   * @param options - Svelte Slide parameters
   */
  const fadeSlide = (node: Element, options?: SlideParams) => {
    const slideTransition = slide(node, options)
    return {
      duration: animateDuration,
      easing: cubicOut,
      css: (t: number) => `
        ${slideTransition.css(t, 0)}
        opacity: ${t}
      `
    }
  }
</script>

{#if visible}
  <nav id="menu"
    in:fadeSlide="{{duration: animateDuration}}" out:fade>

    <Tile label="About" />
    <Tile label="Portfolio" />
    <Tile label="Booking" />
    <Tile label="Contact" />
    <Tile label="Login" login="{true}" />

  </nav>
{/if}

<style lang="scss">
  @import '../../styles/transitions';
  #menu {
    overflow: hidden;
    position: absolute;
    top: 3.5rem;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    opacity: 0.8;
    @include transition-ease-in-out;
  }
</style>