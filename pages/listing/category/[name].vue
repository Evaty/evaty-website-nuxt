<script setup>
const {name} = useRoute().params;
navigateTo(`/category/${name}`, {redirectCode: 301})
</script>