<template>
  <NuxtLayout>
    <NuxtPage/>
    <CookieControl :locale="$t('moment-locale')"/>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => !title ? 'Ein Platz für alles, was du erleben möchtest - Evaty' : `${title} - Evaty`,
  meta: [
    {
      name: "description",
      content: "Plane Ausflüge und Veranstaltungen mit deinen Freunden auf Evaty.net. Finde tolle Angebote in deiner Nähe und entdecke die Welt."
    },
    {
      name: "apple-itunes-app",
      content: `app-id=1562916647`
    }
  ]
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://evaty.net',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://evaty.net/search?search={search_term_string}'
    },
    'query-input': "required name=search_term_string"
  }
});
</script>