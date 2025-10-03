<template>
  <div class="main-bg">
    <video width="320" height="240" autoplay loop muted>
      <source src="@/static/video/醉花阴.mp4" type="video/mp4" />
    </video>
  </div>
  <ThemeSwitch></ThemeSwitch>
  <div class="app">
    <TitleBar />

    <div class="wrapper">
      <Apps />
      <div class="main-container">
        <div class="content-wrapper">
          <router-view v-slot="{ Component, route }">
            <transition @enter="fun[route.meta.Enter]" @leave="fun[route.meta.Leave]" :mode="route.meta.Mode">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
    <div class="overlay-app"></div>
  </div>
</template>

<script setup>
import TitleBar from '@/layouts/TitleBar/index.vue';
import ThemeSwitch from '@/components/ThemeSwitch/index.vue';
import Apps from '@/layouts/menu/index.vue';
import * as fun from '@/utlis/GASP/Animation';
</script>

<style lang="scss">
:root {
  --theme-bg-color: rgba(16 18 27 / 40%);
  --border-color: rgba(113 119 144 / 25%);
  --theme-color: #f9fafb;
  --inactive-color: rgb(113 119 144 / 78%);
  --body-font: 'Poppins', sans-serif;
  --hover-menu-bg: rgba(12 15 25 / 30%);
  --content-title-color: #999ba5;
  --content-bg: rgb(146 151 179 / 13%);
  --button-inactive: rgb(249 250 251 / 55%);
  --dropdown-bg: #21242d;
  --dropdown-hover: rgb(42 46 60);
  --popup-bg: rgb(22 25 37);
  --search-bg: #14162b;
  --overlay-bg: rgba(36, 39, 59, 0.3);
  --scrollbar-bg: rgb(1 2 3 / 40%);
}

.main-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.app {
  background-color: var(--theme-bg-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  height: 100%;
}

img {
  max-width: 100%;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.overlay-app {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: all;
  background-color: rgba(36, 39, 59, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  &.is-active {
    visibility: visible;
    opacity: 1;
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);

  &-title{
    padding: 15px;
    background-color: rgb(206 206 206 / 15%);
    border-radius: 10px;
  }
}

::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>
