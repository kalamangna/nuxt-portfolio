<template>
  <div>
    <section
      class="relative h-screen pt-20 flex flex-col justify-center gap-20"
    >
      <div class="container mx-auto px-4 text-center">
        <div class="text-4xl md:text-5xl font-bold">Hello, I am Abed 👋</div>
        <div class="text-xl md:text-2xl mt-4">
          A Frontend Web Developer based in
          <a
            href="https://www.google.com/maps/place/Sinjai+Regency,+South+Sulawesi/@-5.196906,120.0383321,11z/data=!3m1!4b1!4m5!3m4!1s0x2dbc262d436d58fd:0x3030bfbcaf77060!8m2!3d-5.2171961!4d120.112735"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:font-semibold hover:text-secondary"
          >
            Sinjai, Indonesia.
          </a>
        </div>
      </div>

      <div>
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
