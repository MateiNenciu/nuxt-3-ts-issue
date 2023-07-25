<template>
  <div>Message: {{ $hello('world') }}</div>
</template>

<script lang="ts" setup>
const { $hello } = useNuxtApp()
</script>