<template>
  <div id="app">
    <h1>Meal Planner</h1>
    <router-view></router-view> <!-- Routing: Display current route's component -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('App mounted!'); // 6. Lifecycle hook
  },
};
</script>

<style scoped>
/* Moderan font */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

/* Glavni stil za cijelu aplikaciju */
#app {
  font-family: 'Quicksand', sans-serif;
  color: #4a4a4a; /* Neutralno tamnosiva za tekst */
  margin: 0 auto;
  padding: 20px;
  max-width: 900px;
  background-color: #ffeaf4; /* Pastelna ružičasta */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Elegantna sjena */
  border-radius: 15px;
  border: 2px solid #ff99c8; /* Ružičasti okvir */
}

/* Naslov */
h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #ff5c8d; /* Intenzivna ružičasta za naglasak */
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(255, 92, 141, 0.4); /* Suptilni sjaj */
}

/* Stil za linkove */
a {
  color: #ff5c8d;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
a:hover {
  color: #e4006f; /* Tamnija ružičasta kod hovera */
}

/* Gumbi */
button {
  background-color: #d8b4e2; /* Pastelna lila boja */
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
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

/* Tekstualna polja (input) */
input[type="text"] {
  border: 2px solid #d8b4e2; /* Lila pastelna boja */
  background-color: #fce4ff; /* Blago ružičasto-ljubičasta pozadina */
  color: #4a4a4a; /* Neutralna tamnosiva za tekst */
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus {
  outline: none;
  border-color: #c084fc; /* Intenzivnija lila kod fokusa */
  box-shadow: 0 0 8px rgba(192, 132, 252, 0.5); /* Efekt svjetlosti */
}

/* Pozadina za cijelu stranicu */
body {
  background: linear-gradient(135deg, #ffe4f0, #ffc2d1); /* Blaga ružičasta gradacija */
  margin: 0;
  padding: 0;
}

/* Linkovi unutar router-view */
router-link {
  display: block;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffd1dc;
  margin: 10px 0;
  transition: transform 0.3s ease;
}
router-link:hover {
  transform: scale(1.05);
}
</style>
