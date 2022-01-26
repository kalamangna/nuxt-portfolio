<template>
  <div class="container mx-auto px-4">
    <div class="text-center">
      <div class="font-bold text-3xl">Stacks</div>
      <div class="mt-2 text-lg">Specializing in</div>
    </div>

    <!-- <div class="mt-10 flex justify-center">
      <div v-for="{ name } in stacks" :key="name">
        {{ name }}
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      stacks: [
        {
          name: "Vue",
        },
        {
          name: "Nuxt",
        },
        {
          name: "React",
        },
      ],
    }
  },
}
</script>
