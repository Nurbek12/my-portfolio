<template>
  <app-navbar />

  <header class="h-screen w-full bg-background-900 relative">
    <div class="relative z-10 container py-20 h-full items-center grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="relative space-y-4 z-10">
        <h1 class="text-4xl font-medium text-white">
          <span class="text-primary-500">Нурбек Рустамов</span>, Фул Стек разработчик</h1>
        <p class="text-gray-200 font-light">Привет! Я Нурбек Рустамов, разработчик с опытом 2-3 лет работы в различных проектах. Я специализируюсь на создании высокопроизводительных и масштабируемых веб-приложений. Мои навыки включают в себя фронтенд, бэкенд и десктоп разработку, а также оптимизацию производительности и SEO</p>
        <div class="flex items-center gap-2">
          <app-button>Скачать Резюме</app-button>
          <a href="https://github.com/Nurbek12" target="_blank">
            <app-button-outline class="!px-3">
              <AkGithubFill class="size-5" />
            </app-button-outline>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center relative z-0">
        <div class="z-0 absolute pointer-events-none w-[700px] h-[700px] rounded-full border border-primary-600/30"></div>
        <div class="z-0 absolute pointer-events-none w-[1300px] h-[1300px] rounded-full border border-primary-600/20"></div>
        <div class="z-0 absolute pointer-events-none w-[1900px] h-[1900px] rounded-full border border-primary-600/20"></div>
        <div class="opacity-70 md:opacity-100 earth-animation absolute w-[350px] h-[350px] rounded-full overflow-hidden z-10"></div>
      </div>
    </div>
  </header>

  <main class="min-h-screen w-full bg-background-900">

    <section class="container pt-32 pb-10 h-full relative z-10" id="about">
      <div class="text-center">
        <h1 class="text-white text-2xl">Обо мне - Биография</h1>
      </div>
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-about-card v-for="item,i in aboutCards" :item="item" :key="i" />
      </div>
    </section>

    <section class="container pt-32 pb-10 h-full" id="projects">
      <div class="text-center">
        <h1 class="text-white text-2xl">Мои проекты</h1>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <app-project v-for="project,i in projects" :project="project" :key="i" />

      </div>
    </section>

    <section class="container pt-32 pb-10 h-full" id="skills">
      <div class="text-center">
        <h1 class="text-white text-2xl">Мои навыки</h1>
      </div>

      <div class="mt-12 grid grid-cols-3 gap-4">
        
        <div v-for="s,i in skills" :key="i">
          <h3 class="text-white font-medium"  :class="['text-start md:text-center','text-center','text-end md:text-center'][i]" >{{ s.title }}</h3>

          <div class="mt-6 flex flex-wrap items-center gap-4" :class="['justify-start','justify-center','justify-end'][i]">

            <div v-for="p,j in s.programs" :key="j" class="text-center space-y-2">
              <div class="w-[80px] h-[80px] rounded bg-[#1f1f23] flex justify-center items-center p-4">
                <img :src="p.icon" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text-background-200 text-sm font-medium">{{ p.title }}</p>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section class="container pt-32 pb-10 h-full" id="contacts">
      <div class="text-center">
        <h1 class="text-white text-2xl">Контакты</h1>
      </div>

      <div class="mt-6 py-2 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="rounded-lg p-8 bg-background-800 flex flex-col justify-between gap-4">
          <div v-for="link,i in socialLinks" :key="i" class="flex items-center gap-8">
            <div>
              <component :is="link.icon" class="text-white size-8" />
            </div>
            <div>
              <h2 class="text-white font-medium">{{ link.title }}</h2>
              <a :href="link.url" class="text-gray-300 text-sm hover:underline">{{ link.name }}</a>
            </div>
          </div>
        </div>

        <form @submit.prevent="handlePost" class="w-full bg-background-00 pt-6 rounded-lg space-y-4 pb-20 md:pb-0">
          <div>
            <h1 class="text-white text-lg">Свяжитесь со мной</h1>
            <p class="text-gray-300 text-sm mt-2">Если у вас есть идея или проект, над которым вы хотите работать,
              не стесняйтесь связаться со мной. Буду рад обсудить, как мы можем сотрудничать.</p>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <app-input v-model="formData.name" required placeholder="Имя и фамилия" />
            <app-textarea v-model="formData.message" required placeholder="Сообщения" />
            <app-button :disabled="loading">Отправить</app-button>
          </div>
        </form>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import { AkGithubFill } from '@kalimahapps/vue-icons'
import { projects, skills, aboutCards, socialLinks } from '~/constants'

useHead({
  title: 'Нурбек Рустамов | Портфолио'
})

const loading = ref(false)
const formData = reactive({
  name: "",
  message: ""
})

const handlePost = async () => {
  try {
    loading.value = true
    await $fetch('/api/send', { method: "POST", body: formData })
    alert("Успешно отправлено!")
    Object.assign(formData, { name: "", message: "" })
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

html, body {
  width: 100%;
}

.earth-animation {
  background: url('/earth.jpg');
  background-size: cover;
  box-shadow: inset 30px 10px 60px 0 #0005,
  inset -30px 10px 60px 0 #fff2,
  20px 10px 30px 0 #0002;
  animation: earth-spin 40s linear infinite;
}

@keyframes earth-spin {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: -750px;
  }
}
</style>