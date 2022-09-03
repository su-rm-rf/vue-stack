<script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()
  
  console.log(route.params, route.query, route.path, route.fullPath, route.meta)

  const fp = route.fullPath

  const count = ref(0)
</script>

<script>
  console.log(123)
</script>

<template>
  <div @click="count++" id="abc">
    {{ fp }} {{ count }}
    {{ useRoute().path }}
  </div>
</template>

<!-- <style scoped>
  #abc {
    color: #b0e;
    transform: translate(10, 20);
  }
</style> -->

<docs>
hhee
</docs>