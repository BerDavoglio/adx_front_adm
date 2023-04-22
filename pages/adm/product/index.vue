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
        <input placeholder="Nome" class="w-full h-12 p-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Preço" class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Quantidade" class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Imagem [ex: https://imgur.com/a/...]"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Tamanhos [ex: P;M;G;GG]" class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Cores [ex: Branco;Preto;Amarelo;Vermelho]"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <input placeholder="Material [ex: Poliester;Algodão]"
          class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
        <div
          class="w-[80%] m-auto cursor-pointer bg-green-500 hover:bg-green-700 hover:text-white py-3 rounded-xl mt-10 mb-4">
          <div class="w-fit mx-auto">Criar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
