<template>
  <masonry-wall
    :items="projects"
    :ssr-columns="1"
    :column-width="400"
    :gap="24"
    class="px-3"
  >
    <template #default="{ item }">
      <project-card :project="item" />
    </template>
  </masonry-wall>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Context } from '@nuxt/types'
import { Project } from '~/model/project'
import { localizeDocumentPaths, routes } from '~/model/routes'
import { homeBreadcrumb, projectsBreadcrumb } from '~/model/breadcrumbs'
import { generateSocialTags } from '~/model/meta'

export default defineComponent({
  async asyncData(context: Context) {
    const locale = context.app.i18n.locale
    const projects = (await context
      .$content(`${locale}/projects`)
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch<Project>()) as Project[]
    return {
      projects: localizeDocumentPaths(projects, locale),
    }
  },
  head() {
    const title = this.$t(routes.projects.title) as string
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  mounted() {
    this.$store.commit('setBreadcrumbs', [homeBreadcrumb, projectsBreadcrumb])
  },
})
</script>
