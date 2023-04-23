<template>
  <div>
    <div>
      <div class="w-fit text-3xl mx-auto mt-8">Mini E-Commerce ADX</div>
      <div class="w-fit text-lg text-gray-500 mx-auto mb-8">Painel de Administrador</div>
      <div class="border-gray-500 border-2 rounded-3xl w-[80%] m-auto" />
    </div>
    <div class="w-full">
      <NuxtLink to="/adm">
        <div
          class="w-fit ml-[27.5%] bg-yellow-400 hover:bg-yellow-500 hover:text-white px-10 py-2 rounded-md mt-4 cursor-pointer">
          Voltar
        </div>
      </NuxtLink>
      <div class="w-[42rem] border-black border-2 mx-auto my-4 p-4 rounded-md">
        <input placeholder="Nome" v-model="name"
          class="w-full h-12 p-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Preço" v-model="price" type="number"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Quantidade" v-model="stock" type="number"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Imagem [ex: https://imgur.com/a/...]" v-model="img"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Tamanhos [ex: P;M;G;GG]" v-model="size"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Cores [ex: Branco;Preto;Amarelo;Vermelho]" v-model="color"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Material [ex: Poliester;Algodão]" v-model="material"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />  
        <div @click="update()"
          class="w-[80%] m-auto cursor-pointer bg-green-500 hover:bg-green-700 hover:text-white py-3 rounded-xl mt-10 mb-4">
          <div class="w-fit mx-auto">Editar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params
import { useListCartStore } from '@/stores/listCart';
const listCart = useListCartStore().listCart;
let objIndex = listCart.findIndex((x) => x._id === id);

const snackbar = useSnackbar();

let name = listCart[objIndex].name;
let price = listCart[objIndex].price;
let stock = listCart[objIndex].stock;
let img = listCart[objIndex].img;
let size = listCart[objIndex].size;
let color = listCart[objIndex].color;
let material = listCart[objIndex].material;

async function update() {
  let object = {
    "name": name,
    "price": price,
    "stock": stock,
    "img": img,
    "size": size,
    "color": color,
    "material": material
  }
  await useListCartStore().updateProduct(id, object);
  snackbar.add({
    type: 'success',
    text: 'Produto atualizado com Sucesso!'
  })
  history.back();
}
</script>
