<template>
    <label for="switch-checkbox" class="p-1 w-[50px] h-[26px] transition-all flex items-center overflow-hidden cursor-pointer rounded-2xl bg-background-100 dark:bg-background-800">
        <div class="w-[22px] h-[22px] bg-rose-600 dark:bg-primary-600 rounded-full flex justify-center items-center">
            <slot />
        </div>
        <input v-model="model" id="switch-checkbox" type="checkbox" hidden>
    </label>
</template>

<script setup lang="ts">
const model = defineModel()
</script>