<template>
  <div>
    <div class="text-center font-montserrat font-bold text-3xl">Contacts</div>

    <div
      class="mt-10 flex flex-col md:flex-row items-center gap-8 justify-center"
    >
      <div v-for="contact in contacts" :key="contact.name">
        <a
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center hover:text-secondary"
        >
          <div
            v-html="require(`~/assets/icons/${contact.name}.svg?raw`)"
            class="h-8 w-8"
          />
          <div class="ml-2 font-medium">
            {{ contact.text }}
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
          text: "EMAIL",
          link: "mailto:kalamangna@gmail.com",
        },
        {
          name: "github",
          text: "GITHUB",
          link: "https://github.com/kalamangna",
        },
        {
          name: "linkedin",
          text: "LINKEDIN",
          link: "https://www.linkedin.com/in/kalamangna",
        },
      ],
    }
  },
}
</script>
