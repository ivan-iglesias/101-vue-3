import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progresss"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>


            <!--
                v-on:submit == @submit
                @submit.prevent = avoid using 'e.preventDefault();' in the function
            -->
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p-2">
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `,

    data() {
        return {
            assigments: [
                { id: 1, name: 'Finish project', complete: false },
                { id: 2, name: 'Read chapter 4', complete: false },
                { id: 3, name: 'Turn in homework', complete: false },
            ],

            newAssignment: ''
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
        add() {
            this.assigments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assigments.length + 1
            });

            this.newAssignment = '';
        }
    }
}
