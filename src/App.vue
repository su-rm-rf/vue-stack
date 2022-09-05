<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/vform3">VForm3</router-link>
    <router-link to="/404">??</router-link>
  </nav>

  <router-view />
</template>

<style scoped lang="scss">
  nav {
    display: flex;
    justify-content: space-around;
    a {
      flex: 1;
      text-align: center;
    }
  }
</style>