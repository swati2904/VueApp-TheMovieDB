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
      <Footer/>
      
    </div>
      
    
  
  </div>
</template>

<script>
import MovieView from './components/MovieView.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

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
    key: 'popularity',
    scopedSlots : { customRender: 'popularity' }
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
    Footer,
    
  }
}
</script>

<style>


.container{
  width:80%;
  margin: 0 auto;
}

</style>
