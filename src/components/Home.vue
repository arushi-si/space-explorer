<script setup>
import Card from "./Card.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const allMissionData = computed(() => store.state.data);
</script>

<template>
  <ul
    class="list-none grid grid-cols-1 gap-10 px-5 md:grid-cols-3 md:px-20 md:py-10 lg:grid-cols-4 xl:grid-cols-5"
  >
    <li class="my-5" v-for="mission in allMissionData" :key="mission.id">
      <Card :missionData="mission" />
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
