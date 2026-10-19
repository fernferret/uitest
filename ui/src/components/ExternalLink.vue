<template>
  <!--
    External links have no route to match, so ULink always treats them as inactive (muted).
    `active` forces the primary color. Attrs (to, target, ...) fall through and override these defaults.
  -->
  <ULink active target="_blank"><slot /></ULink>
</template>
