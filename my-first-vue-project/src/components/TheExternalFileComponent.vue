<script setup>
import { currentCity } from "@/stores/CityStore";
</script>

<template>
    <button @click="currentCity.name='Osaka'">Change City</button>
</template>
