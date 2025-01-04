export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("fetch:before", (ctx) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      ctx.options.headers = {
        ...ctx.options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  });
});
