export const state = () => ({
  user: null, // Przechowywanie danych użytkownika
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user; // Ustawia dane użytkownika w stanie
  },
  LOGOUT(state) {
    state.user = null; // Resetuje dane użytkownika
  },
};

export const actions = {
  // Pobieranie danych użytkownika
  async fetchUser({ commit }) {
    try {
      const token = localStorage.getItem("token"); // Pobieranie tokena JWT
      if (!token) return;

      // Wysyłanie zapytania do API w celu pobrania danych użytkownika
      const response = await this.$axios.$get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`, // Użycie tokena JWT
        },
      });

      commit("SET_USER", response); // Zapisanie danych użytkownika w Vuex
    } catch (error) {
      console.error("Błąd podczas pobierania danych użytkownika:", error);
    }
  },

  // Wylogowanie użytkownika
  logout({ commit }) {
    commit("LOGOUT"); // Resetuje dane użytkownika w Vuex
    localStorage.removeItem("token"); // Usuwa token JWT z localStorage
  },
};

export const getters = {
  // Getter dla użytkownika
  user(state) {
    return state.user;
  },

  // Sprawdzenie, czy użytkownik jest zalogowany
  isAuthenticated(state) {
    return !!state.user;
  },
};
