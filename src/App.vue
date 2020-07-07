<template>
  <div id="app">
    <Header />
    <About  id="app" />
    <Price  id="app" />
    <Contact  id="app" />
    <Footer id="app" />
  </div>
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Price,
    Contact,
    Footer
  },
  metaInfo: {
    title: 'Fizjoterapia - Jan Kowalski',
    titleTemplate: 'Fizjoterapia Łódź',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-display: fallback;
}
</style>
