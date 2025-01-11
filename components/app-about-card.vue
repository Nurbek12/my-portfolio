<template>
    <div class="group hover:!bg-primary-600 transition-colors shadow-xl shadow-black/5 text-start p-6 dark:bg-background-800 bg-gray-100">
        <client-only>
            <component :is="item.icon"
                class=" my-2 group-hover:text-white dark:text-primary-600 dark:group-hover:text-background-800 size-16" />
        </client-only>
        <h2 class="group-hover:text-white dark:text-primary-600 dark:group-hover:text-background-800 text-2xl font-medium">
            {{ item.title }}
        </h2>
        <p class="text-black group-hover:text-white dark:text-white dark:group-hover:text-background-900 font-medium transition-colors mt-2 text-sm">
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