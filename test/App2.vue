<script setup>
  import { ref, computed } from 'vue'

  import Home from '../src/components/Home'
  import About from '../src/components/About'
  import NotFound from '../src/components/404'

  const routes = {
    '/': Home,
    '/about': About
  }

  const currentPath = ref(window.location.hash)
  window.addEventListener('hashchange', ev => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<template>
  <nav style="display: flex; justify-content: space-around;">
    <a href="#/">home</a>
    <a href="#/about">about</a>
    <a href="#/not-found">not found</a>
  </nav>

  <component :is="currentView" />
</template>