<template>
  <video controls width="100%" class="elevation-6">
    <source :src="videoSrc()" />
  </video>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    videoSrc() {
      try {
        return require(`~/assets/content/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
})
</script>

<style scoped>
video {
  display: block;
}

video:focus {
  outline: unset;
}
</style>
