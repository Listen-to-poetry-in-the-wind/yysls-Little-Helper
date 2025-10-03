<template>
  <div class="left-side">
    <div class="side-wrapper" v-for="item in menuRoutes" :key="item.path" @click="navigate(item.path)">
      <div class="side-menu">
        <div :class="{ active: item.path === $route.path }">
          <i :class="`${item.meta.menu.icon} mr-5`"></i>
          {{ item.meta.menu.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const menuRoutes = router.options.routes.filter((r) => r.meta && r.meta.menu);
console.log('menuRoutes',menuRoutes)
const navigate = (path) => {
  if (path !== route.path) {
    router.push(path);
  }
};
</script>

<style lang="scss" scoped>

.active{
  background-color: var(--hover-menu-bg);
}

.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
}

.side-menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  div {
    text-decoration: none;
    color: var(--theme-color);
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 12px 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: all 0.3s;

    &:hover {
      background-color: var(--hover-menu-bg);
    }
  }
}
</style>
