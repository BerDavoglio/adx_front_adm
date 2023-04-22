<template>
  <div class="w-full">
    <div class="w-64 h-[20rem] border-black border-2 mx-auto my-36 p-4 rounded-md">
      <div class="w-fit m-auto my-6">Mini E-Commerce ADX</div>
      <input placeholder="Login" class="w-full h-12 p-2 border-gray-300 border-2 rounded-md" />
      <input placeholder="Senha" class="w-full h-12 p-2 mt-2 border-gray-300 border-2 rounded-md" />
      <NuxtLink to="adm">
        <div
          class="w-fit m-auto cursor-pointer bg-green-500 hover:bg-green-700 hover:text-white px-10 py-3 rounded-xl mt-10">
          Acessar
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>