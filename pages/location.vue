<template>
  <div class="container-fluid d-flex position-relative">
    <div id="side">
      blah
    </div>
    <mapbox-map
        map-id="location-search"
        :options="{
          style: 'mapbox://styles/mapbox/streets-v12'
        }"

    ></mapbox-map>
  </div>
</template>
<style lang="scss">
.container-fluid {
  padding: 0;
}

#side {
  width: 23%;
  max-height: calc(100vh - 79px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  #geocoder-container {
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 20px;
    border-bottom: 2px solid var(--evaty-color-gray-light-200);
    background: var(--evaty-color-background);

    .mapboxgl-ctrl-geocoder {
      min-width: 100%;
    }
  }

  .search-results {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.mapboxgl-map {
  position: inherit;
  width: 77%;
  height: calc(100vh - 79px);
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.marker {
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-image: url('@/assets/images/location.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>