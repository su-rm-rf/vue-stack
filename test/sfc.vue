<script setup>
  import { ref, computed } from 'vue'
  
  const num = ref(100)
  console.log(num.value)

  const amo = computed(() => {
    num.value += 1
  })
  
  function changeNum(val) {
    num.value += val
  }
</script>

<template>
  <div @click="changeNum(num)">12{{ num }}34 {{ amo }}</div>
</template>