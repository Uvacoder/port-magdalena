<template>
  <div class="banner">
    <v-img
      :src="require('~/assets/images/banner.webp')"
      :lazy-src="require('~/assets/images/banner-lazy.webp')"
      alt="Banner"
      class="my-5 rounded"
      width="100%"
    />
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  display: inline-flex;
  width: 100%;
}

.banner::after {
  content: '';
  display: block;
  padding-bottom: calc(25% + 2.5rem);
}

.banner::v-deep .v-responsive__content {
  width: unset !important;
}

@media (max-width: 600px) {
  .banner {
    margin-left: -12px;
    margin-right: -12px;
    width: calc(100% + 24px) !important;
  }

  .banner::v-deep .v-image {
    border-radius: 0 !important;
  }
}
</style>
