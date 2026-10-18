<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <WelcomeItem icon="i-lucide-book-open" title="Documentation">
      Vue’s
      <ULink to="https://vuejs.org/" target="_blank">official documentation</ULink>
      provides you with all information you need to get started.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-wrench" title="Tooling">
      This project is served and bundled with
      <ULink to="https://vite.dev/guide/features.html" target="_blank">Vite</ULink>. The
      recommended IDE setup is
      <ULink to="https://code.visualstudio.com/" target="_blank">VSCode</ULink>
      +
      <ULink to="https://github.com/vuejs/language-tools" target="_blank">Vue - Official</ULink>.
      If you need to test your components and web pages, check out
      <ULink to="https://vitest.dev/" target="_blank">Vitest</ULink>
      and
      <ULink to="https://www.cypress.io/" target="_blank">Cypress</ULink>
      /
      <ULink to="https://playwright.dev/" target="_blank">Playwright</ULink>.
      <br />
      More instructions are available in
      <ULink as="button" @click="openReadmeInEditor"><code>README.md</code></ULink>.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-boxes" title="Ecosystem">
      Get official tools and libraries for your project:
      <ULink to="https://pinia.vuejs.org/" target="_blank">Pinia</ULink>,
      <ULink to="https://router.vuejs.org/" target="_blank">Vue Router</ULink>,
      <ULink to="https://test-utils.vuejs.org/" target="_blank">Vue Test Utils</ULink>, and
      <ULink to="https://github.com/vuejs/devtools" target="_blank">Vue Dev Tools</ULink>. If you
      need more resources, we suggest paying
      <ULink to="https://github.com/vuejs/awesome-vue" target="_blank">Awesome Vue</ULink>
      a visit.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-users" title="Community">
      Got stuck? Ask your question on
      <ULink to="https://chat.vuejs.org" target="_blank">Vue Land</ULink>
      (our official Discord server), or
      <ULink to="https://stackoverflow.com/questions/tagged/vue.js" target="_blank"
        >StackOverflow</ULink
      >. You should also follow the official
      <ULink to="https://bsky.app/profile/vuejs.org" target="_blank">@vuejs.org</ULink>
      Bluesky account or the
      <ULink to="https://x.com/vuejs" target="_blank">@vuejs</ULink>
      X account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem icon="i-lucide-heart" title="Support Vue">
      As an independent project, Vue relies on community backing for its sustainability. You can
      help us by
      <ULink to="https://vuejs.org/sponsor/" target="_blank">becoming a sponsor</ULink>.
    </WelcomeItem>
  </div>
</template>
