<template>
  <div class="text-white">
    <section class="py-16 relative">
      <div class="container mx-auto px-4 text-center">
        <div class="text-4xl md:text-5xl font-bold font-montserrat">
          Hello, I am Abed 👋
        </div>
        <div class="text-xl md:text-2xl mt-4">
          A Frontend Web Developer based in Makassar, Indonesia.
        </div>
      </div>

      <div class="mt-16">
        <Photo />
      </div>
    </section>

    <section class="py-20 bg-primaryLighter">
      <div class="container mx-auto px-4">
        <Stacks />
      </div>
    </section>

    <section class="py-20" id="contacts">
      <div class="container mx-auto px-4">
        <Contacts />
      </div>
    </section>
  </div>
</template>

<script>
import Contacts from "~/components/Contacts.vue"
import Photo from "~/components/Photo.vue"
import Stacks from "~/components/Stacks.vue"
export default {
  components: { Photo, Stacks, Contacts },
}
</script>
