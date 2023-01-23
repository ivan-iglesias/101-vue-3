<script setup>
import { currentCity } from '@/store/cityStore';
</script>

<template>
    <button @click="currentCity.name='Osaka'">Change City</button>
</template>
