<template>
    <div class="group hover:bg-primary-600 transition-colors shadow-xl shadow-black/5 text-start p-6 bg-background-800">
        <component :is="item.icon"
            class=" my-2 text-primary-600 group-hover:text-background-800 size-16" />
        <h2 class="text-primary-600 group-hover:text-background-800 text-2xl font-medium">
            {{ item.title }}
        </h2>
        <p class="text-white group-hover:text-background-900 font-medium transition-colors mt-2 text-sm">
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