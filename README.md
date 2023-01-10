# Vue 3

Learning [Vue 3](https://vuejs.org/) with [Laracast videos](https://laracasts.com/series/learn-vue-3-step-by-step).

To run de example open de index file in a browser. From lesson '1.5 One Vue Component Per File' onwards, execute `npx serve` in the terminal. This is necessary due to the use of `<script type="module">`.

## Cheat Sheet

### Attribute Binding

We use `v-bind` or the shorthand `:`

```html
<button :class="active ? 'text-red' : 'text-green'">Click Me</button>
```

### Event Handling

We use `v-on` or the shorthand `@`

```html
<button @click="toggle">Click Me</button>
```

Another example of event handling is the submission of forms with `@submit`. We can add `prevent` to avoid using `e.preventDefault();` in the function

```html
<form @submit.prevent="add">
    ...
</form>
```

### Class Bindings

When **setting class bindings**, we can use strings, arrays or objects

```html
<button
    :class="{
        'border rounded disabled:cursor-not-allow': true,
        'bg-blue-600 hover:bg-blue-700': type === 'primary',
        'is-loading': processing
    }"
    :disabled="processing"
>
    <slot/>
</button>
```

### Parent-Child communitacion

**Parent communicates to the child** through **props**, the **child communicates back to the parent** by emitting an **event**, here is an example of an event:

The *child* emit the event with

```js
this.$emit('event-name', this.newAssignment);
```

The *parent* listens the child's event with

```html
<assigment-create @event-name="addFunction"></assigment-create>
```

When we do it in line, we can access the parameter by using this event variable.

```html
<assignment-tags @change="currentTag = $event"/>
```

### V-Model

It binds the value and listens for when the value changes

```html
<input v-model="name"/>
```

 basically this is the long form of v-model

```html
<input type="text" :value="name" @input="name = $event.target.value"/>
```

> With custom components we can uso V model. See the files *AssignmentList.js* and *AssignmentTags.js* in the task `2.2 A Deeper Look at V-Model`.
