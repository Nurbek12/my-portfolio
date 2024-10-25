<template>
  <app-navbar />

  <header class="h-screen overflow-hidden w-full bg-background-900 relative">
    <div class="relative z-10 container py-20 h-full items-center grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="relative space-y-4 z-10">
        <h1 class="text-4xl font-medium text-white">
          <span class="text-primary-400">Нурбек Рустамов</span>, Фул Стек разработчик</h1>
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
        <div class="earth-animation absolute w-[350px] h-[350px] rounded-full overflow-hidden z-10"></div>
      </div>
    </div>
  </header>

  <main class="min-h-screen w-full bg-background-900">

    <section class="container pt-32 pb-10 h-full" id="about">
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
          <h3 class="text-white font-medium text-center">{{ s.title }}</h3>

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

      <form class="mt-12 w-full bg-background-900 px-6 py-4 rounded-lg space-y-4">
        <h1 class="text-white text-lg">Свяжитесь со мной</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <app-input placeholder="Имя и фамилия" />
          <!-- <app-input placeholder="Имя и фамилия" /> -->
          <app-input placeholder="Сообщения" />
          <app-button>Отправить</app-button>
        </div>
      </form>

    </section>
  </main>
  <footer>
    <div class="container text-white text-xl">
      Если у вас есть идея или проект, над которым вы хотите работать,
      не стесняйтесь связаться со мной. Буду рад обсудить, как мы можем сотрудничать.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AkGithubFill } from '@kalimahapps/vue-icons'
import { projects, skills, aboutCards } from '~/constants'

useHead({
  title: 'Нурбек Рустамов | Портфолио'
})

</script>

<style>
html {
  scroll-behavior: smooth;
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