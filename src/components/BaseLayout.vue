<script setup>
import { inject } from 'vue';

const name = inject('my-name')

</script>

<template>
    <div class="container">
        <header>
            <slot name="header" text="1"></slot>
        </header>
        <main>
            {{ name }}
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>