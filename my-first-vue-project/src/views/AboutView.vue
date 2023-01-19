<script>
import flash from "@/mixins/flash";

export default {
    mixins: [flash]
}
</script>

<template>
  <div>
    <p>
        <button @click="flash('It Works On The About Page!')">Click Me</button>
    </p>
  </div>
</template>
