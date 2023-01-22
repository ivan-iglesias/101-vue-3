<script setup>
import { currentCity } from '@/cities/cities';
</script>

<template>
    <button @click="currentCity.name='Osaka'">Change City</button>
</template>
