<script setup>
import { counter } from "@/stores/CounterStore";
</script>

<template>
  <div>
    <a href="https://vuejs.org/guide/scaling-up/state-management.html#what-is-state-management" target="_blank">Reference</a>

    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()">Increment</button>
  </div>
</template>
