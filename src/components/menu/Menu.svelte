<!-- Menu Wrapper Component -->
<script lang="ts">
  import { slide, SlideParams } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  import { menu } from '@services/store'

  import Tile from '@components/menu/Tile.svelte'

  let visible: boolean = false
  menu.subscribe(v => visible = v)

  /**
   * Animates the menu in and out
   * @param node - Wrapper HTML Element
   * @param options - Svelte Slide parameters
   */
	function fadeSlide(node: Element, options: SlideParams) {
		const slideTrans = slide(node, options)
		return {
			duration: options.duration,
      easing: cubicOut,
			css: (t: number) => `
				${slideTrans.css(t, 0)}
				opacity: ${t};
			`
		};
	}
</script>

{#if visible}
  <nav id="menu" transition:fadeSlide="{{duration: 500}}">
    <Tile label="About" />
    <Tile label="Portfolio" />
    <Tile label="Booking" />
    <Tile label="Contact" />
    <Tile label="Login" login="{true}" />
  </nav>
{/if}

<style lang="scss">
  #menu {
    overflow: hidden;
    position: absolute;
    top: 5rem;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
</style>