# Pinia

[Pinia](https://pinia.vuejs.org/) is a dedicated tool for global state magement.

Install npm package

```
npm i pinia
```

Import pinia in `src\main.js` file

```js
import { createPinia } from "pinia";

// ...

app.use(createPinia());

// ...
```

Create a store

```js
import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        }
    },

    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        }
    },

    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
});
```

Use it

```html
<script setup>
import { useCounterStore } from "@/stores/CounterStore";

let counter = useCounterStore();
</script>

<button
    @click="counter.increment()"
    :disabled="! counter.remaining"
>Increment ({{ counter.remaining }} Remaining)</button>
```
