import { defineStore } from "pinia";

export const useListCartStore = defineStore("listCart", {
  state: () => {
    return {
      listCart: [],
    };
  },
  getters: {},
  actions: {
    async loadData() {
      const { data } = await useFetch("https://adx-backend-berdavoglio.onrender.com/products/");
      this.listCart = data.value;
    },
    async createProduct(bodyNew) {
      await useFetch("https://adx-backend-berdavoglio.onrender.com/products/", {
        method: "POST",
        body: bodyNew,
      });
    },
    async updateProduct(id, bodyUpdated) {
      await useFetch("https://adx-backend-berdavoglio.onrender.com/products/" + id, {
        method: "PATCH",
        body: bodyUpdated,
      });
    },
    async deleteProduct(id) {
      await useFetch("https://adx-backend-berdavoglio.onrender.com/products/" + id, {
        method: "DELETE",
      });
    }
  },
});
