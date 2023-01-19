
# Options API and Composition API

Vue components can be written with two different styles: Options API and Composition API.

https://vuejs.org/guide/introduction.html#api-styles

## Options API

With Options API, we define a component's logic using an object of options such as data, methods, and mounted.

```html
<script>
import TheWelcome from "../components/TheWelcome.vue";

export default {
    components: { TheWelcome }
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
```

## Composition API

With Composition API, we define a component's logic using imported API functions.

```html
<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
```

### Reactive data

Vue provides a `ref()` function which allows us to create reactive "refs" that can hold any value type:

```js
import { ref } from "vue";

let message = ref("Hello, World!");

setTimeout(() => {
    message.value = "I Have Been Changed"
}, 2000);
```

If you dont want to import ref and use `value`, you can try the  experimental [reactivity transform](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-transform)

```js
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

```js
let message = $ref("Hello, World!");

setTimeout(() => {
    message = "I Have Been Changed"
}, 2000);
```
