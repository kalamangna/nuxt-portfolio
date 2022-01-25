<template>
  <div class="flex justify-center">
    <div class="green-circle">
      <nuxt-img src="/photo.png" format="webp" alt="photo profile" />
    </div>
  </div>
</template>

<style scoped>
.green-circle {
  background: #00dc82;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
}

img {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 24rem;
  width: auto;
}

/* md */
@media (min-width: 768px) {
}

/* lg */
@media (min-width: 1024px) {
}

/* xl */
@media (min-width: 1280px) {
  .green-circle {
    height: 22rem;
    width: 22rem;
  }
}
</style>
