<template>
  <div class="green-circle">
    <img src="~/assets/img/photo.png" alt="photo profile" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.green-circle {
  position: relative;
  background: #00dc82;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
}

img {
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

/* md */
@media (min-width: 768px) {
  .green-circle {
    height: 20rem;
    width: 20rem;
  }

  img {
    top: 2rem;
  }
}

/* lg */
@media (min-width: 1024px) {
}

/* xl */
@media (min-width: 1280px) {
  .green-circle {
    height: 25rem;
    width: 25rem;
  }
}
</style>
