import { ref, watch } from "vue";

/**
 * Using localStorage, SSR (serer side rendering) doesn't know what the local
 * storage is. You would need to handle that.
 */
export function useStorage(key, val = null) {
    let storedVal = read();

    if (storedVal) {
        val = ref(storedVal);
    } else {
        val = ref(val);

        write();
    }

    // If you want to keep track of nested objects, you would need to set up a deep watcher.
    watch(val, write, { deep: true });

    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        if (val.value == null || val.value == '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    return val;
}
