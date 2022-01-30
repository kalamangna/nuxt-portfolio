<template>
  <Container>
    <div class="font-bold text-3xl" data-aos="fade-up">Contacts</div>
    <div class="mt-2 text-lg" data-aos="fade-up">Get in touch</div>

    <div
      class="mt-10 flex items-center gap-8 justify-center"
      data-aos="fade-up"
    >
      <div v-for="contact in contacts" :key="contact.name" class="w-16">
        <a
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-secondary flex flex-col items-center gap-2"
        >
          <div v-html="contact.icon" class="h-10 w-10" />

          <div class="uppercase font-montserrat">
            {{ contact.name }}
          </div>
        </a>
      </div>
    </div>
  </Container>
</template>

<script>
import EmailLogo from "~/assets/icons/email.svg?raw";
import GithubLogo from "~/assets/icons/github.svg?raw";
import LinkedInLogo from "~/assets/icons/linkedin.svg?raw";

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
    };
  },
};
</script>
