<template>
  <div class="text-white container mx-auto px-4">
    <section class="flex flex-col md:flex-row gap-10 py-20 items-center">
      <div class="flex-1 text-center md:text-right">
        <div class="text-5xl font-bold mb-6">Hi 👋</div>
        <div class="text-lg mb-6 lg:pl-24">
          You can call me <b>Abed</b>. I am a Frontend Web Developer based in
          Makassar, Indonesia. For the past two years, I have professional
          experience in the IT industry, mainly website development. Currently,
          I work using Javascript frameworks, such as Vue, Nuxt, React and Next.
        </div>

        <button
          class="bg-ijo px-3 py-2 rounded text-sm hover:bg-ijoterang text-black"
        >
          VIEW MY RESUME
        </button>
      </div>
      <div class="flex-1 flex">
        <div
          class="rounded-full flex items-center justify-center bg-ijo overflow-hidden"
        >
          <img
            src="~/assets/img/photo.png"
            width="500"
            height="500"
            alt="photo profile"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
