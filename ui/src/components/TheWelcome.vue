<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import ExternalLink from './ExternalLink.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <WelcomeItem icon="i-lucide-book-open" title="Documentation">
      Vue's
      <ExternalLink to="https://vuejs.org/">official documentation</ExternalLink>
      provides you with all information you need to get started.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-wrench" title="Tooling">
      This project is served and bundled with
      <ExternalLink to="https://vite.dev/guide/features.html">Vite</ExternalLink>. The
      recommended IDE setup is
      <ExternalLink to="https://code.visualstudio.com/">VSCode</ExternalLink>
      +
      <ExternalLink to="https://github.com/vuejs/language-tools">Vue - Official</ExternalLink>.
      If you need to test your components and web pages, check out
      <ExternalLink to="https://vitest.dev/">Vitest</ExternalLink>
      and
      <ExternalLink to="https://www.cypress.io/">Cypress</ExternalLink>
      /
      <ExternalLink to="https://playwright.dev/">Playwright</ExternalLink>.
      <br />
      More instructions are available in
      <ULink as="button" @click="openReadmeInEditor"><code>README.md</code></ULink>.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-boxes" title="Ecosystem">
      Get official tools and libraries for your project:
      <ExternalLink to="https://pinia.vuejs.org/">Pinia</ExternalLink>,
      <ExternalLink to="https://router.vuejs.org/">Vue Router</ExternalLink>,
      <ExternalLink to="https://test-utils.vuejs.org/">Vue Test Utils</ExternalLink>, and
      <ExternalLink to="https://github.com/vuejs/devtools">Vue Dev Tools</ExternalLink>. If you
      need more resources, we suggest paying
      <ExternalLink to="https://github.com/vuejs/awesome-vue">Awesome Vue</ExternalLink>
      a visit.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-users" title="Community">
      Got stuck? Ask your question on
      <ExternalLink to="https://chat.vuejs.org">Vue Land</ExternalLink>
      (our official Discord server), or
      <ExternalLink to="https://stackoverflow.com/questions/tagged/vue.js"
        >StackOverflow</ExternalLink
      >. You should also follow the official
      <ExternalLink to="https://bsky.app/profile/vuejs.org">@vuejs.org</ExternalLink>
      Bluesky account or the
      <ExternalLink to="https://x.com/vuejs">@vuejs</ExternalLink>
      X account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-heart" title="Support Vue">
      As an independent project, Vue relies on community backing for its sustainability. You can
      help us by
      <ExternalLink to="https://vuejs.org/sponsor/">becoming a sponsor</ExternalLink>.
    </WelcomeItem>
  </div>
</template>
