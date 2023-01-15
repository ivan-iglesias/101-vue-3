export default {
    template: `
        <div class="flex gap-2">
            <button
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag == currentTag
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,

        /**
         * This is the default prop name when we are using V model on a custom component.
         * v-model="currentTag" (AssignmentList.js)
         */
        // modelValue: String

        /**
         * If you dont like using model value name, you can set it manually
         * v-model:currentTag="currentTag" (AssignmentList.js)
         */
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}
