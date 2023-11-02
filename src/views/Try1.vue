<template>
  <div class="m-96 pt-44 pl-[580px]">
    <Popper>
      <button>Trigger element</button>
      <template #content>
        <div class="w-96 h-96 bg-yellow-400 shadow-2xl">
          This is the Popper content!@#
        </div>
      </template>
    </Popper>
  </div>
</template>
