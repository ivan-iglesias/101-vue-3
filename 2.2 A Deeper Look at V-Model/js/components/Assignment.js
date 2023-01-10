export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assigment.name }}

                <input type="checkbox" v-model="assigment.complete" class="ml-3">
            </label>
        </li>
    `,

    props: {
        assigment: Object,
    }
}
