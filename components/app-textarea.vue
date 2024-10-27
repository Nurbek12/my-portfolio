<template>
    <div class="bg-background-800 px-4 flex items-center gap-2 rounded-md">
        <slot />
        <textarea rows="6" class="py-3 text-white bg-transparent outline-none w-full resize-none" v-model="model"  :placeholder="placeholder||''" :required="required" type="text" />
    </div>
</template>

<script setup lang="ts">
defineProps<{placeholder?: string, required?: boolean}>()
const model = defineModel({ type: String })
</script>