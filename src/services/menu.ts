/* Dynamic state management for the app */
import { writable } from 'svelte/store';

export const createMenu = () => {
	const { subscribe, set, update } = writable(false)

	return {
		subscribe,
		toggle: () => update(b => !b),
		reset: () => set(false)
	}
}

export const menu = createMenu()