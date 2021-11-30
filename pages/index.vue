<template>
  <div class="text-white">
    <section class="py-20 lg:py-48 relative">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center"
      >
        <div class="flex-1">
          <div class="text-5xl font-bold mb-6">Hi 👋</div>
          <div class="text-lg mb-6">
            You can call me <b>Abed</b>. I am a Frontend Web Developer based in
            Makassar, Indonesia. For the past two years, I have professional
            experience in the IT industry, mainly website development.
            Currently, I work using Javascript frameworks, such as Vue, Nuxt,
            React and Next.
          </div>

          <button
            class="bg-ijo px-3 py-2 rounded text-sm hover:bg-ijoterang text-black"
          >
            VIEW MY RESUME
          </button>
        </div>

        <div class="flex-1">
          <Photo />
          <Background />
        </div>

        <div class="flex-1">test</div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "~/components/Background.vue"
import Photo from "~/components/Photo.vue"
export default {
  components: { Background, Photo },
}
</script>
