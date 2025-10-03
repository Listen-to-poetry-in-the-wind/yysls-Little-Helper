<template>
  <div class="content-section">
    <div class="apps-card" v-for="folder in imageFolders" :key="folder.name">
      <h2 class="w-full mb-0">{{ folder.name }}</h2>
      <div class="app-card" v-for="image in imageFolders[0].images" :key="image.path" @click="showImage(image.url)">
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
const showImage = (url)=>{
  showImagePreview([url])
}
const router = useRouter();
const route = useRoute();

// 定义图片文件夹结构
const imageFolders = ref([])
// 动态导入图片
const loadImages = async () => {
  try {
    // 获取所有图片模块
    const modules = import.meta.glob('/src/static/GBA/**/*.{jpg,jpeg,png,gif,webp}', {
      eager: true
    })

    // 按文件夹分组
    const folderMap = new Map()

    Object.entries(modules).forEach(([path, module]) => {
      // 提取文件夹名
      const pathParts = path.split('/')
      const folderName = pathParts[pathParts.length - 2] // 获取文件夹名
      const fileName = pathParts[pathParts.length - 1] // 获取文件名

      if (!folderMap.has(folderName)) {
        folderMap.set(folderName, [])
      }

      folderMap.get(folderName).push({
        name: fileName,
        path: path,
        url: module.default,
        loaded: false
      })
    })

    // 转换为数组格式
    imageFolders.value = Array.from(folderMap.entries()).map(([name, images]) => ({
      name,
      images
    }))

    console.log(imageFolders.value)

  } catch (error) {
    console.error('加载图片失败:', error)
  }
}
loadImages()

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
