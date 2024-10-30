<template>
    <div class="bg-background-900 border border-background-700 p-4 rounded-lg flex flex-col gap-2">
        <div class="rounded h-[200px] relative overflow-hidden">
            <template v-for="img,i in project.images">
                <template v-if="image===i">
                    <img
                        :src="`/projects/${project.imageFolder}/image-${img}.png`"
                        class="w-full h-full object-cover absolute opacity-50 blur-sm">
                    <img
                        :src="`/projects/${project.imageFolder}/image-${img}.png`"
                        class="w-full h-full object-contain absolute">
                </template>
            </template>
            <div v-if="project.images.length>1" class="absolute space-x-1 right-0 bottom-0 bg-background-900 p-1 rounded-tl-lg">
                <app-button @click="prevSlide" class="!px-1.5 !py-1">
                    <AkChevronLeftSmall />
                </app-button>
                <app-button @click="nextSlide" class="!px-1.5 !py-1">
                    <AkChevronRightSmall />
                </app-button>
            </div>
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
                    {{ project.imageFolder === "none"  ? "Свяжитесь со мной": "Посмотреть"}}
                </app-button>
            </a>
            <a target="_blank" v-if="project.github!==''" :href="project.github">
                <app-button-outline class="text-sm !px-3 !py-1">Github</app-button-outline>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AkChevronLeftSmall, AkChevronRightSmall } from '@kalimahapps/vue-icons'

const { project } = defineProps<{
    project: {
        title: string;
        langs: string[];
        url?: string
        github?: string
        imageFolder: string;
        images: number[];
    }
}>()


const image = ref(0)
const prevSlide = () => {
    if(image.value < 1)
        image.value = project.images.length - 1
    else
        image.value -= 1
}

const nextSlide = () => {
    if(image.value > project.images.length - 2)
        image.value = 0
    else
        image.value += 1
}
</script>