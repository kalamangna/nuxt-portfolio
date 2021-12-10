<template>
  <div class="text-white">
    <section class="py-20 lg:py-32 relative">
      <div
        class="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center text-center lg:text-left"
      >
        <div class="flex-1" data-aos="fade-up">
          <div class="text-5xl font-bold font-montserrat">Hi 👋</div>
          <div class="text-lg mt-6">
            You can call me <b>Abed</b>. I am a Frontend Web Developer based in
            Makassar, Indonesia. For the past two years, I have professional
            experience in the IT industry, mainly website development.
            Currently, I work using Javascript frameworks, such as Vue, Nuxt,
            React and Next.
          </div>

          <button
            class="bg-ijo px-3 py-2 rounded text-sm hover:bg-ijoterang text-black mt-6"
          >
            VIEW MY RESUME
          </button>
        </div>

        <div class="flex-1 flex justify-center items-center" data-aos="fade-up">
          <Photo />
        </div>

        <div class="flex-1" data-aos="fade-up">
          <div class="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus enim assumenda, delectus repellendus perspiciatis amet
            ut nisi officiis, adipisci tempore modi vitae earum dolorum ratione
            temporibus. Repellat, dolores sequi.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Photo from "~/components/Photo.vue"
export default {
  components: { Photo },
}
</script>
