<script setup>
navigateTo({
  path: `/search`,
  params: useRoute().params
}, {redirectCode: 301})
</script>