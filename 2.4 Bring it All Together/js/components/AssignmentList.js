import Assignment from "./Assignment.js"

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul>
                <assignment
                    v-for="assigment in assignments"
                    :key="assigment.id"
                    :assigment="assigment"
                ></<assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}
