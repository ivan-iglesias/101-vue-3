# Mixins and Composables

To reuse the flash function we can use mixins (old style) or composables,

`src/views/HomeView.vue`

```html
<template>
  <main>
    <p>
        <button @click="flash('It Works!')">Click Me</button>
    </p>
  </main>
</template>
```

## Mixins

`src/mixins/flash.js`

```js
import swal from 'sweetalert';

export default {
    methods: {
        flash(message) {
            swal('Success!', message, 'success');
        }
    }
}
```

`src/views/HomeView.vue`

```html
<script>
import flash from "@/mixins/flash";

export default {
    mixins: [flash]
}
</script>
```

## Composables

`src/composables/useFlash.js`

```js
import swal from "sweetalert";

export function useFlash() {
    function flash(title, message, level = 'success') {
        return swal(title, message, level);
    }

    return { flash };
}
```

The are two ways to use de composables

`src/views/HomeView.vue`

```html
<script>
import {useFlash} from "@/composables/useFlash";

export default {
    setup() {
        let { flash } = useFlash();

        return { flash };
    }
};
</script>
```

The best way is

```html
<script setup>
import {useFlash} from "@/composables/useFlash";

let { flash } = useFlash();
</script>
```
