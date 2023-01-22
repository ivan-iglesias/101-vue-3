<script setup>
    import { currentCity } from "@/cities/cities";
    import TheExternalFileComponent from "@/components/TheExternalFileComponent.vue";
</script>

<template>
  <main>
    <p>You are living in {{  currentCity.name }}.</p>

    <TheExternalFileComponent />
  </main>
</template>
