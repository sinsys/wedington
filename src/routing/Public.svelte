<script>
  import { Route, router } from 'tinro';
  import {
    About,
    Booking,
    Contact,
    Login,
    Portfolio
  } from '@components/layouts/index'
  import { transitionQueue } from '@src/services/transition'

  /* Listen for transition events to allow existing processing to complete */
	transitionQueue.subscribe(queue => {
    while (queue.eventQueue.length > 0) {
      console.log('Processing event!', queue.eventQueue[0])
      transitionQueue.processNext()
    }
	})

  /* Listen for router events to publish changes in page */
  router.subscribe(route => {
    const routeLabel = route.path === '/' ? 'About' : route.path.slice(1)
    const routeChangeEvent = {
      label: routeLabel,
      target: 'page',
      duration: 1000,
      startState: 'in',
      endState: 'out'
    }
    console.log('Processing route change!', routeChangeEvent)
    transitionQueue.addToQueue(routeChangeEvent)
  })
</script>

<Route path="/">
  <About />
</Route>
<Route path="/portfolio/*">
  <Route path="/">
    <Portfolio />
  </Route>
</Route>
<Route path="/booking">
  <Booking />
</Route>
<Route path="/contact">
  <Contact />
</Route>
<Route path="/login">
  <Login />
</Route>
