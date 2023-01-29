# Transition

There are two transition approaches:

## Inline

This approach is used with CSS utility classes and Frameworks like Tailwind.

```xml
<Transition
    enter-from-class="transition duration-300 opacity-0"
    enter-to-class="transition duration-300 opacity-100"
    leave-from-class="transition duration-200 opacity-100"
    leave-to-class="transition duration-200 opacity-0"
>
    <!-- ... -->
</Transition>
```

To remove duplicated code

```xml
<Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
>
    <!-- ... -->
</Transition>
```

` leave-from-class` is not necessary because we are already using 100% opacity.

## Naming the transition

```xml
<Transition name="modal">
    <!-- ... -->
</Transition>

<style>
.modal-enter-active, .modal-leave-active {
    transition: opacity .3s;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-to, .modal-leave-from {
    opacity: 100;
}
</style>
```
