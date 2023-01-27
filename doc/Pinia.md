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

## Build ans Seed a Store

```js
import { defineStore } from "pinia";

export let useTeamStore = defineStore('counter', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        fill() {
            // fill data with ajax request or json file
            import('@/team.json').then(r => {
                let data = r.default;

                // option 1
                this.name = data.name;
                this.spots = data.spots;
                this.members = data.members;

                // option 2
                this.$patch({
                    name: data.name,
                    spots = data.spots,
                    members = data.members,
                });

                // option 3
                this.$state = r.default;
            });
        },

        async fillAsync() {
            let r = await import('@/team.json');

            this.$state = r.default;
        }
    }
});
```

```html
<script setup>
import { useTeamStore } from "@/stores/UseTeamStore";

let team = useTeamStore();

team.fill();
</script>
```
