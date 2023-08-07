<script setup>
defineProps({
    header: {
        type: String
    },
    message: {
        type: String
    },
})

const emit = defineEmits(['cancel'])

</script>

<template>
    <Teleport to="body">
        <div class="modal" @click="emit('cancel')">
            <p>{{ header }}</p>
            <div>
                {{ message }}
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: beige;
    border: 1px solid #000;
    border-radius: 5px;
    
}
</style>