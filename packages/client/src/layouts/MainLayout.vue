<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-grey-2 text-grey-8">
      <q-toolbar class="flex justify-center">
        <div class="page-width">
          <q-toolbar-title>PM2UI</q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex justify-center">
        <div class="page-width page-width-padding q-pt-sm">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
.page-width
  width: 100%
  max-width: 1200px
  body.screen--xs &
    max-width: 100%
    &.page-width-padding
      padding-left:12px
      padding-right:12px
  body.screen--sm &
    max-width: 100%
    &.page-width-padding
      padding-left:12px
      padding-right:12px
  body.screen--md &
    max-width: 890px
</style>
