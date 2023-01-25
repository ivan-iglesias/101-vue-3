<script setup>
import { usePiniaCounterStore } from "@/stores/PiniaCounterStore";

let counter = usePiniaCounterStore();
</script>

<template>
  <div>
    <h1>Pinia</h1>

    <p>{{ counter.count }}</p>

    <button
        @click="counter.increment()"
        :disabled="! counter.remaining"
    >Increment ({{ counter.remaining }} Remaining)</button>
  </div>
</template>
