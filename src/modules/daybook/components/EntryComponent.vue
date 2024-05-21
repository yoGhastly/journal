<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 1 } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">20</span>
      <span class="mx-1 fs-5">Mayo</span>
      <span class="mx-2 fw-ligth">2024, lunes</span>
    </div>

    <div class="entry-description">
      Non ea mollit nisi veniam laboris occaecat tempor est esse. Labore ea non
      qui culpa do eu dolor veniam. Minim sit Lorem est ipsum. Ullamco ullamco
      exercitation excepteur veniam laborum dolore ea deserunt ullamco. Est aute
      ipsum mollit nostrud enim ad adipisicing et id qui ad voluptate ipsum
      fugiat. Qui consequat nostrud enim consequat labore voluptate. Commodo
      cupidatat velit deserunt eu qui eu aliqua minim excepteur aute laborum
      fugiat. Officia proident pariatur ex veniam velit non officia adipisicing
      qui do nisi fugiat adipisicing consequat.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
