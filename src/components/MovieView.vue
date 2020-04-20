<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <Table
      :columns="columns"
      :datasource="datasource"
      :loading="loading"
      :pageSize="20"
      @onPaginationChange="OnKeyChange($event)"
      :totalResults="totalResults"
    />
  </div>
</template>

<script>

import Table from "./Table";
import axios from "axios";

export default {
  data(){
    return{
      datasource:[],
      loading: false,
      currentPage:1,
      totalResults:0
    }
  },
  props: {
    title: String,
    type: String,
    columns: Array,
    pageSize: Number,
  },
  components:{
    Table
  },
  methods:{
    OnKeyChange(e){
      console.log(e);
      let { current } = e;
      this.currentPage = current;
      this.fetchData();
    },
    fetchData(){
      this.loading = true;
      let params = {
        api_key:"d1cb2cce7a129cc412e9abc4c00e23bc",
        page: this.currentPage
      }
      axios.get( `https://api.themoviedb.org/3/movie/${this.type}`, { 
        params:{
          ...params
        }
      })
      .then( response => response.data )
      .then( response => {
        let { page, results, total_results } = response
        this.datasource = results;
        this.currentPage = page;
        this.totalResults = total_results;
        console.log(response);
        console.log(page, results, total_results);
      })
      .finally( () => {
        this.loading = false;
      })
    }
  },
  computed:{
  },
  created(){
    // https://api.themoviedb.org/3/movie/550?api_key=d1cb2cce7a129cc412e9abc4c00e23bc
    this.fetchData();
  },
  mounted(){
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
