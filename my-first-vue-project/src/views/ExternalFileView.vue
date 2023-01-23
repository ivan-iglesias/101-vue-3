<script setup>
import { currentCity } from "@/stores/cityStore";
import { counter } from "@/stores/counterStore";
import TheExternalFileComponent from "@/components/TheExternalFileComponent.vue";
</script>

<template>
  <main>
    <p>You are living in {{ currentCity.name }}.</p>

    <TheExternalFileComponent />

    <p>The current count is {{ counter.count }}.</p>
  </main>
</template>
