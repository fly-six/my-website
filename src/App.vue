<template>
  <div id="app">
    <Header ref="header"></Header>
    <router-view/>  
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App' 
} 
</script>
  
<style>
</style>
