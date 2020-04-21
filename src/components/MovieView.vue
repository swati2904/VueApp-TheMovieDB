<template>
  <div class="wrap">
    <TableHeader :title="title"/>
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
import TableHeader from "./TableHeader";
import { MOVIE_API } from "../extras/endpoints.js"

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
    Table,
    TableHeader
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
      axios.get(`${MOVIE_API}${this.type}`, { 
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
    this.fetchData();
  },
  mounted(){
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrap{
    margin: 20px 0px;
    border: 5px solid #304455;
    border-radius: 5px;
}
</style>
