<script setup>
import BaseLayout from './BaseLayout.vue';

</script>

<template>
    <BaseLayout>
        <template #header="props">
            <h1>Here might be a page title {{props.text}}</h1>
        </template>

        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </BaseLayout>
</template>