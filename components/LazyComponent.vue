<template>
  <div>
    <h2>Lazy Component</h2>
    <p>This component is loaded lazily, only when needed.</p>
  </div>
</template>

<script>
export default {
  name: 'LazyComponent',
  data() {
    return {
      message: 'Welcome to the lazy loaded component!',
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
  margin: 20px;
  padding: 20px;
  background-color: #ffeaf4; /* Pastelna ružičasta */
  border-radius: 15px; /* Zaobljeni rubovi */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Suptilna sjena */
  border: 2px solid #ff99c8; /* Ružičasti okvir */
}

h2 {
  color: #ff5c8d; /* Intenzivna ružičasta za naglasak */
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(255, 92, 141, 0.3); /* Suptilni sjaj */
}

p {
  font-size: 16px;
  color: #555; /* Neutralna siva za tekst */
  margin-top: 10px;
}
</style>
