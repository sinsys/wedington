<!-- Menu Wrapper Component -->
<script lang='ts'>
  import { router } from 'tinro'
  
  import { slide, fade } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  import { animateDuration } from '@services/static'
  import { transitionQueue } from '@services/transition'
  import { menu } from '@src/services/menu'

  import Tile from '@components/menu/Tile.svelte'


  let visible: boolean = false
  const routeMap = [
    { label: 'About', routePath: '/' },
    { label: 'Portfolio', routePath: '/portfolio' },
    { label: 'Booking', routePath: '/booking' },
    { label: 'Contact', routePath: '/contact' },
    { label: 'Login', routePath: '/login', login: true }
  ]
  const animateDurationMultiplier = 1.25
  menu.subscribe(v => visible = v)

  /**
   * Animates the menu
   * @param node - Wrapper HTML Element
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
  <div id='overlay-wrapper'
    on:click={menu.toggle}
    on:keydown={menu.toggle}
    transition:fade>
    
    <nav id='menu'
      transition:fadeSlide>
      {#each routeMap as route}
        <Tile label={route.label} routePath={route.routePath} login={route?.login ?? false} />
      {/each}
    </nav>
  </div>
{/if}

<style lang='scss'>
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