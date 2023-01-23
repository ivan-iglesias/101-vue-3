<script setup>
    import { currentCity } from "@/store/cityStore";
    import TheExternalFileComponent from "@/components/TheExternalFileComponent.vue";
</script>

<template>
  <main>
    <p>You are living in {{  currentCity.name }}.</p>

    <TheExternalFileComponent />
  </main>
</template>
