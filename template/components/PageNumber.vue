<template>
  <div class="page-number absolute bottom-4 right-4 text-sm opacity-70">
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </div>
</template>

<style scoped>
.page-number {
  color: var(--slidev-theme-text);
  z-index: 100;
}
</style>
