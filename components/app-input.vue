<template>
    <div class="bg-background-800 px-4 flex items-center gap-2 rounded-md">
        <slot />
        <input class="py-3 text-white bg-transparent outline-none w-full" v-model="model" v-bind="props" type="text">
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{placeholder?: string}>()
const model = defineModel()
</script>