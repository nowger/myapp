<template>
  <router-view />
</template>

<script>

import axios from "axios"

// 设置基准路径
axios.defaults.baseURL = "http://localhost:8888"

export default {
}
</script>

<style lang="less">

</style>
