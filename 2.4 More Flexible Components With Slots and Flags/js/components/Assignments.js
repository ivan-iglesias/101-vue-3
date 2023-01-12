import AssignmentList from "./AssignmentList.js"
import AssigmentCreate from "./AssigmentCreate.js"

export default {
    components: { AssignmentList, AssigmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progresss">
                <assigment-create @add="add"></assigment-create>
            </assignment-list>

            <div v-if="showCompleted">
                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assigment => ! assigment.complete),
                completed: this.assignments.filter(assigment => assigment.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                console.log(assignments);
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}
