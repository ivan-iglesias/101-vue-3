# Async Components

We can load a component from the server when it's needed with [defineAsyncComponent](https://vuejs.org/guide/components/async.html#async-components).

```html
<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  component: String,
  name: String
});

const AsyncComponent = defineAsyncComponent(() => import(`@/components/${props.component}.vue`));
</script>

<template>
    <AsyncComponent :name="name" />
</template>
```
