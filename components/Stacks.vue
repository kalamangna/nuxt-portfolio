<template>
  <div>
    <div class="text-center font-montserrat font-bold text-3xl">Stacks</div>

    <div class="mt-12 flex justify-center">
      <div v-for="{ name } in stacks" :key="name">
        {{ name }}
      </div>
    </div>
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
