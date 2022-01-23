<template>
  <nav class="bg-primary fixed w-full h-20 flex items-center z-10" id="top">
    <div class="flex justify-between items-center container mx-auto px-4">
      <div
        class="text-white font-bold text-lg cursor-pointer"
        v-scroll-to="'#top'"
      >
        ABED
      </div>

      <div>
        <button
          class="bg-secondary px-3 py-2 rounded text-sm hover:bg-secondaryLighter"
          v-scroll-to="'#contacts'"
        >
          LET'S TALK
        </button>
      </div>
    </div>
  </nav>
</template>
