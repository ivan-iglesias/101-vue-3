<script setup>
import { currentCity } from "@/stores/cityStore";
</script>

<template>
    <button @click="currentCity.name='Osaka'">Change City</button>
</template>
