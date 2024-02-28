<script setup>
navigateTo({
  path: `/map`,
  params: useRoute().params
}, {redirectCode: 301})
</script>