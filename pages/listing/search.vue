<script setup>
navigateTo({
  path: `/search`,
  query: useRoute().query
}, {redirectCode: 301})
</script>