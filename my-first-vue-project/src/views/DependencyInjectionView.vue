<script setup>
    import { provide, ref } from 'vue'
    import Footer from "@/components/Footer.vue";

    let userName = ref('John Doe');

    provide('userName', {
        userName,
        changeName: () => userName.value = 'Changed'
    });
</script>

<template>
  <main>
        <div style="margin:1rem 0;">
            <input v-model="userName" type="text" />
        </div>

        <Footer></Footer>
  </main>
</template>
