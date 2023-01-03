<script>
  import {Route} from 'tinro';
  import {
    About,
    Booking,
    Contact,
    Login,
    Portfolio
  } from '@components/layouts/index'
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
