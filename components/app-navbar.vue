<template>
  <nav class="fixed w-full top-0 z-20" :class="{' backdrop-blur dark:bg-background-900/60 bg-white/60': isScrolled}">
    <div class="w-full container flex justify-between items-center py-6">
      <a href="#" class="text-primary-600 text-lg font-medium">Нурбек Р.</a>
      <div class="flex items-center gap-6">
        <div class="hidden md:flex items-center gap-6">
          <a v-for="link,i in links" :href="link.url" :key="i" class="font-light text-sm dark:text-white hover:text-primary-500 transition-colors">
            {{ link.title }}
          </a>
        </div>
        <button @click="model=!model" class="w-[30px] h-[30px] rounded flex items-center justify-center">
          <client-only>
            <BxSun v-show="model" class="dark:text-background-300 text-background-700 size-6" />
            <BxMoon v-show="!model" class="dark:text-background-300 text-background-700 size-5" />
          </client-only>
        </button>
      </div>
    </div>
  </nav>
  <div class="fixed flex md:hidden justify-center bottom-10 z-20 w-full">
    <client-only>
      <div class="border dark:border-background-700 border-gray-200 shadow-lg flex items-center gap-8 backdrop-blur dark:bg-background-950/60 bg-white/50 rounded-full px-4 py-3">
        <a v-for="link,i in links" :href="link.url" :key="i" :class="{'!text-primary-500':link.url===(route.hash||'#')}" class="font-light text-sm dark:text-white hover:text-primary-500 transition-colors">
          <client-only>
            <component :is="link.icon" class="size-6" />
          </client-only>
        </a>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { links } from '~/constants'
import { BxSun, BxMoon } from '@kalimahapps/vue-icons'

const route = useRoute()
const isScrolled = ref(false)
const model = defineModel({ type: Boolean })

const changeScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  changeScroll()

  window.addEventListener('scroll', () => changeScroll())
})
</script>