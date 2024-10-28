<template>
  <nav class="fixed w-full top-0 z-20 backdrop-blur bg-background-900/60">
    <div class="w-full container flex justify-between items-center py-6">
      <a href="#" class="text-primary-500 text-lg font-medium">Нурбек Р.</a>
      <div class="hidden md:flex items-center gap-6">
        <a v-for="link,i in links" :href="link.url" :key="i" class="font-light text-sm text-white hover:text-primary-500 transition-colors">
          {{ link.title }}
        </a>
      </div>
    </div>
  </nav>
  <div class="fixed flex md:hidden justify-center bottom-10 z-20 w-full">
    <client-only>
      <div class="border border-background-700 shadow-lg flex items-center gap-8 backdrop-blur bg-background-950/60 rounded-full px-4 py-3">
        <a v-for="link,i in links" :href="link.url" :key="i" :class="{'!text-primary-500':link.url===(route.hash||'#')}" class="font-light text-sm text-white hover:text-primary-500 transition-colors">
          <component :is="link.icon" class="size-6" />
        </a>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { links } from '~/constants'

const route = useRoute()
</script>