<template>
  <q-avatar class="cursor-pointer">
    <img :src="avatarUrl ? avatarUrl : 'https://api.adorable.io/avatars/400/260d105696cad1dffbb8c3d0484abbd3.png'"/>
  </q-avatar>
</template>

<script>
  export default {
    name: "Participante",
    props: ['avatarUrl']
  }
</script>

