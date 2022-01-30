<template>
  <Container>
    <div class="font-bold text-3xl" data-aos="zoom-in-up">Stacks</div>
    <div class="mt-2 text-lg" data-aos="zoom-in-up">
      Specializing in Website Development
    </div>

    <!-- <div class="mt-10 flex justify-center">
      <div v-for="{ name } in stacks" :key="name">
        {{ name }}
      </div>
    </div> -->
  </Container>
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
    };
  },
};
</script>
