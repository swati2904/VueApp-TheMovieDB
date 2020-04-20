<template>
  <div>
    <a-table 
      :columns="columns" 
      :dataSource="datasource" 
      :loading="loading"  
      size="small"
      :pagination="{ pageSize: pageSize, total: totalResults}"
      :scroll="{ y: 440 }"
      @change="$emit('onPaginationChange',$event)"
    >
      <template slot="poster_path" slot-scope="data">
        <div class="poster">
          <img
              v-if="data.poster_path"
              :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"
              alt="image-alt"
          />
        </div>
      </template>

      <template slot="title" slot-scope="data" >
          <a-tooltip placement="topLeft" :title="data.overview">
            <div>{{  data.title }}</div>
            <div :style="{ fontSize:'20px', fontWeight:'600'}">{{  data.release_date }}</div>
        </a-tooltip>
      </template>
    </a-table>
    <a-button type="primary" @click="isModalVisible = true">Open Modal</a-button>
    <a-modal title="Basic Modal" :visible="isModalVisible" :footer="null" @cancel="isModalVisible = false" :width="620">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>

export default {
  data(){
    return{
      isModalVisible: false
    }
  },
  props:{
    columns: Array,
    datasource: Array,
    loading: Boolean,
    pageSize: Number,
    totalResults: Number
  }
};
</script>
<style scoped>
.poster{
  width:90px;
  height:90px;
}
.poster img{
  width:100%;
  height:100%;
  border-radius: 15px;
  border: 1px solid black;
}

@media screen and (max-width: 850px){
  .poster{
    width:50px;
  height:50px;
  }
}
</style>


<table>
  <td> <slot name="title"> </slot> <td>