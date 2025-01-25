// views/MealPage.vue
<template>
  <div>
    <h2>{{ meal?.title || 'Loading...' }}</h2>  <!--1. Interpolation/one-way binding-->
    <p v-if="meal">Ingridients: {{ meal.ingridients }}</p>
  </div>
</template>

<script>
import { useMealStore } from '../store/mealStore';

export default {
  name: 'MealPage',
  props: ['id'], // 2. Two-way binding using properties
  computed: {    //4. Computed properties
    meal() {
      const mealStore = useMealStore();
      return mealStore.meals.find((b) => b.id === parseInt(this.id));
    },
  },
};
</script>