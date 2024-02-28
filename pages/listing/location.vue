<script setup>
navigateTo({
  path: `/map`,
  query: useRoute().query
}, {redirectCode: 301})
</script>