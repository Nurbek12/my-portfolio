<template>
    <div class="bg-background-900 border border-background-700 p-4 rounded-lg flex flex-col gap-2">
        <div class="rounded h-[140px] relative overflow-hidden">
            <template v-for="img,i in project.images">
                <img v-show="image===i"
                    :src="`/projects/${project.imageFolder}/image-${img}.png`"
                    class="w-full h-full object-cover absolute">
            </template>
        </div>
        <h2 class="text-white font-medium">{{ project.title }}</h2>
        <div class="flex flex-wrap gap-2">
            <span v-for="l in project.langs" class="px-2 py-0.5 rounded bg-background-600 text-xs text-white">
                # {{l}}
            </span>
        </div>
        <div class="flex justify-start items-end gap-2 flex-1">
            <a target="_blank" :href="project.url">
                <app-button :disabled="project.url===''" class="text-sm !px-3 !py-1.5">
                    {{ project.imageFolder === "none"  ? "Посмотрим)": "Посмотреть"}}
                </app-button>
            </a>
            <a target="_blank" v-if="project.github!==''" :href="project.github">
                <app-button-outline class="text-sm !px-3 !py-1">Github</app-button-outline>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const image = ref(0)
defineProps<{
    project: {
        title: string;
        langs: string[];
        url?: string
        github?: string
        imageFolder: string;
        images: number[];
    }
}>()
</script>