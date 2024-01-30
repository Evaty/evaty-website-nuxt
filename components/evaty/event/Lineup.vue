<template>
  <section class="container line-up pb-100" v-if="lineup?.length > 0">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-30">Line Up</h2>
      </div>
      <div class="col-12">
        <div class="row pb-50" v-for="(date, key) in dates()">
          <div class="col-12">
            <h3>{{key}}</h3>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-20" v-for="slot in date">
            <evaty-image-card :src="slot.artist.profileImage?.url" href="j">
              {{slot.artist.username}}
            </evaty-image-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {EvatyImageCard} from "evaty-component-lib";

const dayjs = useDayjs();
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
dayjs.locale('de');

const uri = `https://api.evaty.net/api/v1/event/${props.id}/lineup/`
const {data : lineup} = await useFetch(uri, {
  key: `${props.id}-lineup`,
  transform: (_data) => _data.body
});

function dates() {
  let dates = {}
  lineup.value.forEach((entry) => {
    const key = dayjs(entry.timeslotStart).format("dddd DD.MM");
    if(!(dates[key] instanceof Array)) {
      dates[key] = [];
    }
    dates[key].push(entry);
  });
  // lineup.value.body.forEach((entry) => dates[new Date(entry.timeslotStart).getDate()]);
  return dates;
}
</script>

<style lang="scss" scoped>

</style>