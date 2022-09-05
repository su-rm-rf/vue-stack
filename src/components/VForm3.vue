<script setup lang="ts">
  import { ref, reactive } from 'vue'

  const formJson = reactive({"widgetList":[],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules",
"labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":"",
"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"",
"onFormValidate":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)
</script>

<template>
  <v-form-designer></v-form-designer>

  <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef"></v-form-render>

  <el-button type="primary" @click="">提交</el-button>
</template>

<style>

</style>