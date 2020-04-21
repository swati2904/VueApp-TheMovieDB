<template>
  <div class="tablewrap">
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
          <a-tooltip placement="topLeft" :title="data.overview">
            <img
                v-if="data.poster_path"
                :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"
                alt="image-alt"
            />
          </a-tooltip>
        </div>
      </template>

      <template slot="title" slot-scope="data" >
            <div><a @click="onMovieSelect(data.id)">{{  data.title }}</a></div>
            <div :style="{ fontSize:'20px', fontWeight:'600'}">{{  data.release_date }}</div>
      </template>

      <template slot="popularity" slot-scope="data">
          <div>
              <a-progress
                type="circle"
                :strokeColor="{
                  '100%': '#304455',
                  '0%': '#4fc08d',
                }"
                :percent="data.popularity"
                :width="70"
                :strokeWidth="7"
                
              />
          </div>
      </template>
    </a-table>

    <MovieModal
      v-if="isModalVisible"
      :isMovieModalVisible="isModalVisible"
      :movieId="movieId"
      @close:modal="onMovieClose"
    />
  </div>
</template>
<script>
/*
About Table
============
1.) 


probs
=====
 columns: Array,
 datasource: Array,
 loading: Boolean,
 pageSize: Number,
 totalResults: Number
*/


import MovieModal from "./MovieModal";


export default {
  data(){
    return{
      isModalVisible: false,
      movieId:''
    }
  },
  props:{
    columns: Array,
    datasource: Array,
    loading: Boolean,
    pageSize: Number,
    totalResults: Number
  },
  components:{
    MovieModal
  },
  methods: {
    onMovieSelect(movieId){
      this.movieId = movieId;
      this.isModalVisible = true;
    },
    onMovieClose(){
      this.isModalVisible = false;
      this.movieId = '';
    }
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
