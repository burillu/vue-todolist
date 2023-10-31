

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        toDoList:[
          {
            text:'Fare la Spesa',
            done:true,
            id:1
          },
          {
            text:'Fare la lavatrice',
            done:false,
            id:2
          },
          {
            text:'Pagare l\' affitto',
            done:false,
            id:3
          },
          
        ],
        lastId:3,
        newItemList:''

      }
    },
    methods:{
      removeItem(ident){
        const index = this.toDoList.findIndex((el)=>el.id === ident)
        //console.log(index);
        this.toDoList.splice(index,1)
      }
    }
  }).mount('#app')