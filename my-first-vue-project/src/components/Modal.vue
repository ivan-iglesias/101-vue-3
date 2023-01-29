<script setup>
import { defineProps } from "vue";

defineProps({
    show: Boolean
});
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div>
                    <slot>default blody</slot>
                </div>

                <footer>
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    z-index: 9999;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 75vw;
    max-width: 500px;
    border-radius: 8px;
}

.modal-container footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: .5rem;
    font-size: .8rem;
}

.modal-container footer button {
    background: #ddd;
    padding: .25rem .75rem;
    border-radius: 24px;
}

.modal-container footer button:hover {
    background: #c8c8c8;
}

.modal-enter-active, .modal-leave-active {
    transition: opacity .3s;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-to, .modal-leave-from {
    opacity: 100;
}
</style>
