<template>
  <div>
    <h1>Characters</h1>
    <ListCharacters />
  </div>
</template>

<script>
  import ListCharacters from "../components/ListCharacters";
  export default {
    name: 'Characters',
    components: {
      ListCharacters
    }
  }
</script>
