<template>
  <div>
    <h3>Meal List</h3>
    <ul>
      <li v-for="meal in meals" :key="meal.id">
        <router-link :to="`/meal/${meal.id}`">{{ meal.title }}</router-link>
      </li>
    </ul>
    <form @submit.prevent="submitForm">
      <input v-model="title" placeholder="Meal Title" /> <!--2. Two-way binding -->
      <input v-model="ingridients" placeholder="Ingridients" />
      <button type="submit">Add Meal</button>
    </form>
    <button @click="loadLazyComponent">Load Lazy Component</button>
    <LazyComponent v-if="showLazyComponent" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

// 11. LazyComponent definition for asynchronous loading
const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'));

export default {
  name: 'MealList',
  props: ['meals'], // 8. Stateless component using properties
  emits: ['add-meal'], // 9. Component that emits an event
  data() {
    return {
      title: '',
      ingridients: '',
      showLazyComponent: false, // LazyComponent display control
    };
  },
  methods: {
    submitForm() {
      if (this.title && this.ingridients) {
        this.$emit('add-meal', { title: this.title, ingridients: this.ingridients }); // 9. Component that emits an event
        this.title = '';
        this.ingridients = '';
      }
    },
    loadLazyComponent() {
      this.showLazyComponent = true;
    },
  },
  components: {
    LazyComponent,
  },
};
</script>

<style scoped>
/* Tekstualna polja (input) */
input {
  border: 2px solid #d8b4e2; /* Lila pastelna boja */
  background-color: #fce4ff; /* Blago ružičasto-ljubičasta pozadina */
  color: #4a4a4a; /* Neutralna tamnosiva za tekst */
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #c084fc; /* Intenzivnija lila kod fokusa */
  box-shadow: 0 0 8px rgba(192, 132, 252, 0.5); /* Efekt svjetlosti */
}

/* Gumbi */
button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #d8b4e2; /* Pastelna lila boja */
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #c084fc; /* Intenzivnija ljubičasta kod hovera */
  transform: translateY(-3px); /* Efekt lebdenja */
}

button:active {
  transform: translateY(1px); /* Efekt klika */
}
</style>
