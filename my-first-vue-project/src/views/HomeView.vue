<script setup>
import {useFlash} from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <main>
    <h1>Flash With Composables</h1>
    <p>
        <button @click="flash('Test', 'It Works!', 'info')">Click Me</button>
    </p>
  </main>
</template>
