<template>
  <div class="page-number">
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </div>
</template>

<style scoped>
.page-number {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  color: var(--slidev-theme-text);
  opacity: 0.7;
  z-index: 100;
  pointer-events: none;
}
</style>
