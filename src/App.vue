<template>
  <div id="app">

    <div class="container">
      <Header/>
      <MovieView 
        title="Top Rated Movies"
        :columns="topRatedColumn"
        type="top_rated"
      />
      <MovieView 
        title="Upcoming Movies"
        :columns="topRatedColumn"
        type="upcoming"
      />
      
    </div>
      
    
  
  </div>
</template>

<script>
import MovieView from './components/MovieView.vue'
import Header from './components/Header.vue'

const topRatedColumn = [
  {
    title:"",
    key: 'poster_path',
    scopedSlots: { customRender: 'poster_path' },
  },
  {
    title:"Title",
    key: 'title',
    scopedSlots: { customRender: 'title' },
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
    Header,
    
  }
}
</script>

<style>


.container{
  width:80%;
  margin: 0 auto;
}

</style>
