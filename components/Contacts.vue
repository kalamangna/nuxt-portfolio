<template>
  <div>
    <div class="text-center font-bold text-3xl">Contacts</div>

    <div class="mt-10 flex items-center gap-8 justify-center">
      <div v-for="contact in contacts" :key="contact.name">
        <a
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-secondary flex flex-col items-center gap-2"
        >
          <div
            v-html="require(`~/assets/icons/${contact.name}.svg?raw`)"
            class="h-10 w-10"
          />

          <div class="uppercase">
            {{ contact.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "email",
          link: "mailto:kalamangna@gmail.com",
        },
        {
          name: "github",
          link: "https://github.com/kalamangna",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/kalamangna",
        },
      ],
    }
  },
}
</script>
