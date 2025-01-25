
# Peta laboratorijska vježba - Napredni razvoj programske potpore za web

URL aplikacije u cloudu:https://labosweb5.onrender.com
Aplikacija se pokreće pomoću naredbe `npm run dev`.

1. **interpolation/one-way binding** - DA - `views/MealPage.vue`, linija 4.
2. **two-way binding** - DA - `views/MealPage.vue`, linija 14., `components/MealList.vue`, linija 13.
3. **methods** - DA - `components/MealList.vue`, linija 41.
4. **computed properties** - DA - `views/MealPage.vue`, linija 15.
5. **scoped style** - DA - `App.vue`, linija 18., `components/MealList.vue`, linija 59.

6. **lifecycle hook** - DA - `App.vue`, linija 13.
7. **routing (više stranica)**
   - aplikacija je mealmarkable, tako da rade linkovi - DA - `router/index.js`, linija 15.
   - dinamičko usmjeravanje s 404 stranicom ("catch all") - DA - `router/index.js`, linija 11.

8. **barem dvije komponente**
   - komponenta bez stanja pomoću properties - DA - `components/MealList.vue`, linija 32.
   - komponenta sa stanjem - DA - `views/HomePage.vue`, linija 15., `components/MealList.vue`, linija 34.

9. **barem jedna komponenta mora emitirati barem jedan event** - DA - `views/HomePage.vue`, linija 5., `components/MealList.vue`, linija 33., `components/MealList.vue`, linija 44.
10. **Pinia store** - DA - `store/mealStore.js`, linija 4.

11. **asinkroni dohvat podataka s backenda**
    - napravljen mock, podaci su u memoriji i postoji asinkroni poziv/upis - DA - `store/mealStore.js`, linija 12.
    - lazy učitavanje jednog dijela aplikacije - DA - `router/index.js`, linija 10., `components/MealList.vue`, linija 28.
