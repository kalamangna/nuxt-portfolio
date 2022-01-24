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
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
}

img {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 18rem;
  width: auto;
}

/* md */
@media (min-width: 768px) {
  .green-circle {
    height: 18rem;
    width: 18rem;
  }
}

/* lg */
@media (min-width: 1024px) {
}

/* xl */
@media (min-width: 1280px) {
  .green-circle {
    height: 24rem;
    width: 24rem;
  }

  img {
    height: 24rem;
  }
}
</style>
