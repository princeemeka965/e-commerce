<script setup></script>

<template>
  <div className="w-full h-full flex flex-col">
    <div className="w-full h-full flex lg:flex-row md:flex-row flex-col">
      <div
        className="lg:flex md:flex lg:relative md:relative fixed lg:w-1/2 md:w-1/2 w-full flex-grow lg:h-screen md:h-screen min-h-[400px] p-5 bg-market"
      >
        <div className="flex w-full h-full flex-col justify-center">
          <div className="flex flex-row justify-end">
            <div className="lg:w-3/4 md:w-3/4 w-full flex flex-col my-10 div-right"></div>
          </div>
        </div>
      </div>
      <slot name="layout" />
    </div>
  </div>
</template>

<style scoped>
.bg-market {
  background-image: url('@/assets/banner_1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
