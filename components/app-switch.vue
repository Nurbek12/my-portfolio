<template>
    <div class="p-1 w-[50px] h-[26px] transition-all flex items-center overflow-hidden cursor-pointer rounded-2xl bg-background-200">
        <div class="w-[22px] h-[22px] bg-rose-600 rounded-full flex justify-center items-center">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const model = defineModel()
</script>