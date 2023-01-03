import { writable, Subscriber, Unsubscriber } from 'svelte/store'

/* Compartmentalized targets for animations */
type TransitionTarget = 'overlay' | 'page' | 'component'

/* Direction to end transition state on */
type TransitionDirection = 'in' | 'out' | 'repeat'

/* A single request to animate a component in the app */
interface ITransitionRequest {
  label: string
  type: TransitionTarget,
  duration: number
  startState: TransitionDirection
  endState: TransitionDirection
}

/* A single request's outcome and input details */
interface ITransitionResult extends ITransitionRequest {
  complete: boolean
}

/* Contextual information about transition sequences */
interface ITransitionContext {
  eventQueue: ITransitionRequest[]
  processed: ITransitionResult[]
}

/* Data Store for transition orchestration */
interface ITransitionQueue {
  subscribe: (this: void, run: Subscriber<ITransitionContext>) => Unsubscriber
  addToQueue: (req: ITransitionRequest) => void
  processNext: () => void
  resetQueue: () => void
  removeProcessed: () => void
}

/* Initial state with no pending or processed animations */
const baseState: ITransitionContext = {
  eventQueue: [],
  processed: []
}

/**
 * Creates a Queue for handling transition/animation events within app in ordered sequence
 * @returns 
 */
function createTransitionQueue (): ITransitionQueue {
  const { subscribe, set, update } = writable(baseState)

  /**
   * Adds one event to be processed for a transition sequence
   * @param req - Request for a single transition event
   */
  const addToQueue = (req: ITransitionRequest): void => {
    update(transContext => {
      return {
        eventQueue: [...transContext.eventQueue, req],
        processed: [...transContext.processed]
      }
    })
  }

  /**
   * Processes a single event in the transition queue and marks it completed
   */
  const processNext = (): void => {
    update(transContext => {
      const eventToProcess = transContext.eventQueue.shift()

      /* Do stuff for the event, probably handling time and sequencing */
      console.log('Pretend I did stuff to this:', eventToProcess.label)
      /* Do stuff for the event, probably handling time and sequencing */

      return {
        eventQueue: transContext.eventQueue,
        processed: [...transContext.processed, {
          ...eventToProcess,
          complete: true
        }]
      }
    })
  }

  /**
   * Resets the queue to the base state
   */
  const resetQueue = (): void => set(baseState)

  /**
   * Removes all processed events from memory
   */
  const removeProcessed = (): void => update(transContext => {
    return {
      eventQueue: transContext.eventQueue,
      processed: []
    }
  })

  return {
    subscribe,
    addToQueue,
    processNext,
    resetQueue,
    removeProcessed
  }
}

export const transitionQueue = createTransitionQueue()
