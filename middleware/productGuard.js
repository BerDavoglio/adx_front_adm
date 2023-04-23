import { useListCartStore } from "@/stores/listCart";

export default defineNuxtRouteMiddleware (async (to, from) => {
  await useListCartStore().loadData()
})
