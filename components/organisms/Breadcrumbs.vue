<template>
  <v-breadcrumbs :items="breadcrumbs" nuxt :large="!small" class="breadcrumbs">
    <template #divider>
      <v-icon>{{ mdiChevronRight }}</v-icon>
    </template>
    <template #item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        :disabled="item.disabled"
        :exact="true"
        class="unselectable breadcrumb-item"
      >
        <v-icon
          v-if="item.icon"
          class="text--primary"
          :aria-label="$t(item.text)"
          v-text="item.icon"
        />
        <template v-else>
          {{ $t(item.text) }}
        </template>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import { Breadcrumb } from '~/model/breadcrumbs'

export default defineComponent({
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    breadcrumbs(): Breadcrumb[] {
      const locale = this.$i18n.locale
      const rawCrumbs = this.$store.state.breadcrumbs
      if (rawCrumbs.length < 2) {
        return []
      }
      return rawCrumbs.map((crumb: Breadcrumb, index: number) => ({
        text: crumb.text,
        to: this.localePath(crumb.to, locale),
        icon: crumb.icon,
        disabled: index >= rawCrumbs.length - 1,
      }))
    },
  },
})
</script>

<style lang="scss">
.breadcrumbs {
  flex-wrap: nowrap;

  li .v-icon {
    font-size: 1.5rem;
  }

  a {
    font-weight: bold;
  }

  a:not(.v-breadcrumbs__item--disabled) {
    color: unset;
  }

  .breadcrumb-item {
    white-space: nowrap;
  }
}
</style>
