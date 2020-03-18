<template>
  <q-carousel
    swipeable
    animated
    v-model="slide"
    thumbnails
    class="bg-white shadow-1 rounded-borders"
    transition-show="flip-down"
    transition-hide="flip-up"
  >
    <q-carousel-slide
      v-for="(evidencia, index) in evidencias"
      :key="evidencia.id"
      :name="index"
      :img-src="evidencia.url"
    />
    <template v-slot:control>
      <q-carousel-control position="top-right" :offset="[8, 5]">
        <q-btn
          push
          round
          dense
          color="white"
          text-color="primary"
          icon="fas fa-times"
          v-close-popup
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
export default {
  name: "VisualizarEvidencia",
  props: ["evidencias"],
  data() {
    return {
      slide: 0,
      fullscreen: false
    };
  }
};
</script>

<style>
</style>
