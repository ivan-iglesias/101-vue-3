<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { onMounted } from "vue";

onMounted(() => {
    console.log("onMounted");
});

let message = $ref("Hello, World!");

setTimeout(() => {
    message = "I Have Been Changed"
}, 2000);

let doSomething = () => {
    alert("Hello World");
}
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <input type="text" v-model="message">

    <p>
        <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
