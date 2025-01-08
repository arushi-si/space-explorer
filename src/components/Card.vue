<script setup>
const props = defineProps({
  missionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="`/mission/${missionData.id}`">
    <div class="shadow-md w-full h-full">
      <img class="w-full h-52" :src="missionData.imageUrl" />
      <div class="p-5">
        <h1
          class="text-lg font-semibold whitespace-nowrap text-ellipsis w-54 overflow-hidden"
          :title="missionData.missionName"
        >
          {{ missionData.missionName }}
        </h1>
        <span class="flex justify-between my-3 text-sm">
          <p>{{ missionData.launchDate }}</p>
          <p>{{ missionData.status }}</p>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
