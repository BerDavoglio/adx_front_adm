<template>
  <div>
    <div class="border-gray-400 border-2 rounded-md w-[95%] h-[10rem] mx-auto mt-6">
      <div class="m-4 grid grid-cols-5">
        <img :src="obj.img" class="rounded-md max-h-[8rem]">
        <div class="w-fit m-auto font-semibold text-xl my-auto">{{ obj.name }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">R${{ obj.price.toFixed(2) }}</div>
        <div class="w-fit m-auto font-semibold text-xl my-auto">Quantidade: {{ obj.stock }}</div>
        <div class="w-fit m-auto my-auto">
          <NuxtLink :to="url(obj._id)">
            <div class="cursor-pointer rounded-sm w-24 h-10 bg-yellow-500 m-4">
              <div class="w-fit pt-2 m-auto">Editar</div>
            </div>
          </NuxtLink>
          <div @click="removeCartFunc(obj._id)" class="cursor-pointer rounded-sm w-24 h-10 bg-red-500 m-4">
            <div class="w-fit pt-2 m-auto">Remover</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListCartStore } from '@/stores/listCart';
const listCart = useListCartStore();
const snackbar = useSnackbar();

function url(id) {
  return 'adm/product/' + id;
}
async function removeCartFunc(id) {
  await listCart.deleteProduct(id);
  snackbar.add({
    type: 'error',
    text: 'Produto deletado com Sucesso!'
  })
  location.reload();
};
</script>
<script>
export default {
  name: 'CartCard',
  props: ['obj'],
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped></style>