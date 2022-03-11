<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  methods:{
    bindBroadCastingData(data){
    console.log('Broad Casting Recieve : ',data);
    },
    connectToSocket() {
      this.$socket.main.on('YOUR Channel', this.bindBroadCastingData);
    }
  },
  mounted(){
    this.connectToSocket();
  }
}
</script>
