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
      const { data } = await useFetch("http://127.0.0.1:3000/products/");
      this.listCart = data.value;
    },
    async createProduct(bodyNew) {
      await useFetch("http://127.0.0.1:3000/products/", {
        method: "POST",
        body: bodyNew,
      });
    },
    async updateProduct(id, bodyUpdated) {
      await useFetch("http://127.0.0.1:3000/products/" + id, {
        method: "PATCH",
        body: bodyUpdated,
      });
    },
    async deleteProduct(id) {
      await useFetch("http://127.0.0.1:3000/products/" + id, {
        method: "DELETE",
      });
    }
  },
});
