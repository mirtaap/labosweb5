// views/HomePage.vue
<template>
  <div>
    <h2>Welcome to Meal Planner</h2>
    <MealList :meals="meals" @add-meal="addMeal" /> <!-- 9. Emits event to add meal -->
  </div>
</template>

<script>
import { useMealStore } from '../store/mealStore';
import MealList from '../components/MealList.vue';

export default {
  name: 'HomePage',
  components: { MealList }, // 8. Component with state
  setup() {
    const mealStore = useMealStore();
    const meals = mealStore.meals;

    const addMeal = (meal) => {
      mealStore.addMeal(meal);
    };

    return { meals, addMeal };
  },
};
</script>