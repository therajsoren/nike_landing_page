import React from 'react'
import {Nav} from './components/Nav.jsx'
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections/index.js'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <h1> raj soren</h1>
      <section>
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section >
        <Services/>
      </section>
      <section >
        <SpecialOffers/>
      </section>
      <section>
        <CustomerReviews/>
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App