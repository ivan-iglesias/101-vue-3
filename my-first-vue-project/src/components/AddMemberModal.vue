<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let showModal = ref(false);
</script>

<template>
    <button @click="showModal = true">Show Modal</button>

    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
            <p>Need to add a new member to your team?</p>

            <form>
                <input type="email" placeholder="Email Address...">
                <button>Add</button>
            </form>
        </Modal>
    </Teleport>


</template>

