<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let showModal = ref(false);
</script>

<template>
    <Modal :show="showModal" @close="showModal = false">
        <p>Need to add a new member to your team?</p>

        <form>
            <input type="email" placeholder="Email Address...">
            <button>Add</button>
        </form>
    </Modal>

    <button
        @click="showModal = true"
   >Show Modal</button>
</template>

