<script setup>

</script>

<template>
  <nav id="headerNav">
    <router-link to="/">home</router-link>
    <router-link to="/business">business</router-link>
    <router-link to="/about">about</router-link>
  </nav>

  <div id="contentBody">
    <router-view></router-view>
  </div>
</template>

<style>

</style>