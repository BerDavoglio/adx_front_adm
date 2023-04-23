<template>
  <div>
    <div>
      <div class="w-fit text-3xl mx-auto mt-8">Mini E-Commerce ADX</div>
      <div class="w-fit text-lg text-gray-500 mx-auto mb-8">Painel de Administrador</div>
      <div class="border-gray-500 border-2 rounded-3xl w-[80%] m-auto" />
    </div>
    <NuxtLink to="/adm/product">
      <div
        class="w-fit mx-auto my-4 cursor-pointer bg-yellow-400 hover:bg-yellow-500 hover:text-white py-6 px-24 rounded-lg">
        Adicionar novo produto
      </div>
    </NuxtLink>
    <div class="mx-[10%] my-6">
      <div v-for="(obj) in listCart.listCart" v-bind:key="obj">
        <CartCard :obj="obj" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListCartStore } from '@/stores/listCart';
const listCart = useListCartStore();

definePageMeta({
  middleware: ['product-guard']
})
</script>
