import AssignmentList from "./AssignmentList.js"
import AssigmentCreate from "./AssigmentCreate.js"

export default {
    components: { AssignmentList, AssigmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progresss"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assigment-create @add="add"></assigment-create>
        </section>
    `,

    data() {
        return {
            assigments: [
                { id: 1, name: 'Finish project', complete: false },
                { id: 2, name: 'Read chapter 4', complete: false },
                { id: 3, name: 'Turn in homework', complete: false },
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assigments.filter(assigment => ! assigment.complete),
                completed: this.assigments.filter(assigment => assigment.complete)
            }
        }
    },

    methods: {
        add(name) {
            this.assigments.push({
                name: name,
                completed: false,
                id: this.assigments.length + 1
            });
        }
    }
}
