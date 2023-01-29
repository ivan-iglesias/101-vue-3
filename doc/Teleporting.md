# Teleporting

Creating a modal, is considered a good practice to place the HTML for the modal at the bottom of the document just before the the closing body tag.

```xml
<Teleport to="body">
    <!-- ... -->
</Teleport>
```

To teleport something keep in mind that it needs to be something that currently exists in the dom. For that we can add a mounted hook and then dispatch a gloval event.

```html
<div id="hello">
    <h1>Hello</h1>
</div>
```

```xml
<Teleport v-if="loaded" to="#hello">
    <!-- ... -->
</Teleport>
```
