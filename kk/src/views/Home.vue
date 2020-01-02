<template>
  <div>
    <div>
      <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    </div>
      <van-card
       v-for="(item,index) in list" :key="index"
        :num="item.name"
        :title="item.title"
        :thumb="item.img"
/>
  </div>
</template>

<script>
export default {
data() {
  return {
    list:[],
    value:[]
  }
},
created() {
  this.getList()
},
methods: {
  onSearch(value){
    let coo=this.value;
    console.log(coo)
    const find=data.data.filter(val=>val.name==name)
    if(find){
      console.log(coo
      
      )
    }
  },
  onCancel(){
  },
  getList(){
    this.$http.get('/api/list').then(res=>{
      console.log(res.data.data)
      this.list=res.data.data
    })
  }
},
}
</script>

<style>

</style>