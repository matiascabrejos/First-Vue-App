<template>
  <section>
    <header><h1>My Characters</h1></header>
    <ul>
      <character-details name="Innen" character-class="Druida" race="Elfo" level="40"></character-details>
      <character-details name="Reborn" character-class="Mago" race="Humano" level="37"></character-details>
    </ul>
  </section>
</template>

<script>
import CharacterDetails from './components/CharacterDetails.vue';
export default {
  components: { CharacterDetails },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>