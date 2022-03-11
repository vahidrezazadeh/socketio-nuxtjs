# Socket.io Nuxtjs

How to use Socket Io in Nuxt.js

## Dependency

Install [socket.io-client](https://github.com/socketio/socket.io-client)

```javascript
npm i socket.io-client
```

## Usage

Copy './plugins/socket.js' to plugins Directory.

Add This to nuxt.config.js

```javascript

 plugins: [
    "~/plugins/socket.js",
  ]

```

In pags/index.vue ( For Example)

```jaavscript
export default {
  
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
```

```javascript
npm install

npm run dev
```


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vahidrezazadeh/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vahidrezazadeh5/)
