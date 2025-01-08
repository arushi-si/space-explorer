<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const missionData = computed(() =>
  store.getters.getMissionById(route.params.id)
);
</script>

<template>
  <img class="w-full h-80 object-cover" :src="missionData.imageUrl" />
  <div class="px-10 py-5 lg:px-40 lg:py-10">
    <h1 class="text-4xl font-bold">{{ missionData.missionName }}</h1>
    <p class="py-5">Fun Fact -> {{ missionData.description }}</p>
  </div>
</template>

<style scoped></style>
