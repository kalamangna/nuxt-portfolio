<template>
  <div>
    <div class="text-center">
      <div class="font-bold text-3xl">Contacts</div>
      <div class="mt-2 text-lg">Find me on</div>
    </div>

    <div class="mt-10 flex items-center gap-8 justify-center">
      <div v-for="contact in contacts" :key="contact.name">
        <a
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-secondary flex flex-col items-center gap-2"
        >
          <div v-html="contact.icon" class="h-10 w-10" />

          <div class="uppercase">
            {{ contact.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EmailLogo from "~/assets/icons/email.svg?raw"
import GithubLogo from "~/assets/icons/github.svg?raw"
import LinkedInLogo from "~/assets/icons/linkedin.svg?raw"

export default {
  data() {
    return {
      contacts: [
        {
          name: "email",
          link: "mailto:kalamangna@gmail.com",
          icon: EmailLogo,
        },
        {
          name: "github",
          link: "https://github.com/kalamangna",
          icon: GithubLogo,
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/kalamangna",
          icon: LinkedInLogo,
        },
      ],
    }
  },
}
</script>
