<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => !title ? 'Ein Platz für alles, was du erleben möchtest - Evaty' : `${title} - Evaty`,
  meta: [
    {
      name: "description",
      content: "Plane Ausflüge und Veranstaltungen mit deinen Freunden auf Evaty.net. Finde tolle Angebote in deiner Nähe und entdecke die Welt."
    }
  ]
})
</script>