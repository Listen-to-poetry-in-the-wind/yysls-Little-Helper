<template>
  <div class="content-section">
  <h1 class="content-wrapper-title" v-text="route.meta.menu.remarks"></h1>
    <div class="apps-card">
      <div class="app-card" v-for="image in imageFolders2[0]?.images" :key="image.path" @click="showImage(image.url)">
        <img :src="image.url" :alt="image.name" @load="image.loaded = true" />
        <div class="app-card__title flex items-center" v-text="image.name.split('.')[0]"></div>
        <div class="app-card__remarks">
          <div class="line-clamp-1 text-14" v-text="image?.remarks || '没有说明'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const showImage = (url)=>{
  showImagePreview([url])
}

// 定义图片文件夹结构
const imageFolders2 = ref([])
// 动态导入图片
const loadImages2 = async () => {
  try {
    // 获取所有图片模块
    const modules2 = import.meta.glob('/src/static/GBA/各职业调律/*.{jpg,jpeg,png,gif,webp}', {
      eager: true
    })

    // 按文件夹分组
    const folderMap2 = new Map()

    Object.entries(modules2).forEach(([path, module]) => {
      // 提取文件夹名
      const pathParts2 = path.split('/')
      const folderName2 = pathParts2[pathParts2.length - 2] // 获取文件夹名
      const fileName2 = pathParts2[pathParts2.length - 1] // 获取文件名

      if (!folderMap2.has(folderName2)) {
        folderMap2.set(folderName2, [])
      }

      folderMap2.get(folderName2).push({
        name: fileName2,
        path: path,
        url: module.default,
        loaded: false
      })
    })

    // 转换为数组格式
    imageFolders2.value = Array.from(folderMap2.entries()).map(([name, images]) => ({
      name,
      images
    }))

    console.log(imageFolders2.value)

  } catch (error) {
    console.error('加载图片失败:', error)
  }
}

onMounted(() => {
  loadImages2()
})

</script>

<style lang="scss">
.content-section {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  &-title {
    color: var(--content-title-color);
    margin-bottom: 14px;
  }
}

.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(25% - 15px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 15px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.02) translateZ(0);
    background-color: var(--theme-bg-color);
  }

  &__title {
    font-size: 22px;
    padding: 15px 0;
    border-bottom: 1px solid var(--border-color);
  }

  &__remarks {
    font-weight: 400;
    padding: 20px 0;
    text-align: justify;
  }

  @media screen and (max-width: 1900px) {
    width: calc(33.3% - 13px);
  }

  @media screen and (min-width: 1940px) {
    width: calc(20% - 16px);
  }

}
</style>