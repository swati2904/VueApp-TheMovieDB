<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="wrap-movies-view">
      <MovieView 
        title="Top Rated Movies"
        :columns="topRatedColumn"
        type="top_rated"
        :pageSize="5"
        /> 
    </div>
  
  </div>
</template>

<script>
import MovieView from './components/MovieView.vue'

const topRatedColumn = [
  {
    title:"Title",
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Language',
    dataIndex: 'original_language',
    key: 'agoriginal_languagee',
  },
  {
    title: 'Popularity',
    dataIndex: 'popularity',
    key: 'popularity',
  },
  {
    title: 'Average Vote',
    key: 'vote_average',
    dataIndex: 'vote_average',
  },
  {
    title: 'Total Vote Count',
    key: 'vote_count',
    dataIndex:"vote_count"
  },
];
export default {
  name: 'App',
  data(){
    return {
    topRatedColumn,
    }
  },
  components: {
    MovieView,
    
  }
}
</script>

<style>

.wrap-movies-view{
  margin: 10px;
  border: 3px solid;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
