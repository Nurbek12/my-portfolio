<template>
    <div class="bg-background-800 px-4 flex items-center gap-2 rounded-md">
        <slot />
        <input class="py-3 text-white bg-transparent outline-none w-full" v-model="model" :placeholder="placeholder||''" :required="required" type="text">
    </div>
</template>

<script setup lang="ts">
const model = defineModel()
defineProps<{placeholder?: string, required?: boolean}>()
</script>