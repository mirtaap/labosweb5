// store/mealStore.js
import { defineStore } from 'pinia';

export const useMealStore = defineStore('mealStore', {          //10. Pinia store
  state: () => ({
    meals: [
      { id: 1, title: 'Pizza', ingridients: 'dough, tomato, cheese, ham, mushrooms, basil' },
      { id: 2, title: 'Tuna Salad', ingridients: 'lettuce, tuna, olive oil, salt, corn, peppers' },
    ],
  }),
  actions: {
    async addMeal(meal) {
      // 11. Mock asynchronous retrieval of data from the backend
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.meals.push({ id: Date.now(), ...meal });
    },
  },
});