<script setup>
    import TabbableTextarea from "@/components/TabbableTextarea.vue";
    import { ref } from "vue";

    let comment = ref('test value');

    // let textarea = ref(null);
    //
    // onMounted(() => {
    //     textarea.value.addEventListener("keydown", (e) => {
    //         let t = textarea.value;
    //
    //         if (e.keyCode == 9) {
    //             let val = t.value;
    //             let start = t.selectionStart;
    //             let end = t.selectionEnd;
    //
    //             t.value = val.substring(0, start) + "\t" + val.substring(end);
    //
    //             t.selectionStart = t.selectionEnd = start + 1;
    //
    //             e.preventDefault();
    //         }
    //     })
    // });
</script>

<template>
  <main>
    <form>
        <!-- <textarea ref="textarea" style="width:100%;height: 300px;">Hi there</textarea> -->

        <TabbableTextarea v-model="comment" style="width: 100%;height: 300px;" />
    </form>
  </main>
</template>
