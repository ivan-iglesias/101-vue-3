<script setup>
import { inject } from 'vue'

let { userName, changeName } = inject('userName')
const environment = inject('environment')

// setTimeout(() => {
//     userName.value = 'Jane Doe';
// }, 2000);
</script>

<template>
    <p>{{ userName }} working in {{ environment  }} environment.</p>

    <button @click="changeName">Change Name</button>
</template>
