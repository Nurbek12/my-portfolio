<template>
    <div class="group hover:bg-primary-700 transition-colors shadow-xl shadow-black/5 text-start p-6 bg-background-700">
        <component :is="item.icon"
            class=" my-2 text-primary-700 group-hover:text-background-800 size-16" />
        <h2 class="text-primary-700 group-hover:text-background-800 text-2xl">
            {{ item.title }}
        </h2>
        <p class="text-white group-hover:text-background-800 font-light mt-4 text-sm">
            {{ item.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    item: {
        icon: any
        title: string
        description: string
    }
}>()
</script>