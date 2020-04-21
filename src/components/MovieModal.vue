<template>
    <a-modal 
      :title="loading ? 'fetching...': movieData.title" 
      :visible="isMovieModalVisible" 
      :footer="null" 
      @cancel="$emit('close:modal')" 
      :width="620"
      :bodyStyle="{ padding:'30px', height:'300px'}"
    >
        <div>
            <a-spin size="large" v-if="loading"/>
            <div v-else> 
                <div class = "modal">
                    <img src="../assets/undraw_videographer_nnc7.png" alt="movie image" width="205">
                    <ul>
                        <li>genres</li>
                        <li>title</li>
                        <li>revune</li>
                        <li>runtime</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </a-modal>

</template>
<script>

import { MOVIE_API } from "../extras/endpoints.js";
import axios from 'axios';

export default {
    data(){
        return{
            loading: true,
            movieData: {},
        }

    },
    props:{
        isMovieModalVisible: Boolean,
        movieId: Number,
    },
   methods:{
        fetchMovieData(){
            this.loading = true;
            let params = {
                api_key:"d1cb2cce7a129cc412e9abc4c00e23bc"
            }
            // https://api.themoviedb.org/3/movie/537061?api_key=d1cb2cce7a129cc412e9abc4c00e23bc
            axios.get(`${MOVIE_API}${this.movieId}`,{ 
                params:{
                    ...params
                }
            })
            .then( response => response.data  )
            .then( (response) => {
                this.movieData = response;
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally( ()=> {
                this.loading = false;
            })

        }
    },
    created(){
        this.fetchMovieData();
    }
}
</script>
<style scoped>

.modal{
        margin: 0;
        padding: 0;
        border: 1;
        font-size: 100%;

}
</style>