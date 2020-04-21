<template>
    <a-modal 
      :title="loading ? 'fetching...': movieData.title" 
      :visible="isMovieModalVisible" 
      :footer="null" 
      @cancel="$emit('close:modal')" 
      :width="850"
      :bodyStyle="{ padding:'30px', height:'430px'}"
    >
        <div>
            <a-spin size="large" v-if="loading"/>
            <div v-else> 
                <div class="wrapcontent" >
                    <div class="wrapcontent__left">
                        <div class="img-wrap">
                            <img 
                                v-if="movieData.poster_path && movieData.poster_path.length>0 "
                                :src="`https://image.tmdb.org/t/p/w500${movieData.poster_path}`"
                                alt="image-alt"
                            />
                        </div>

                    </div>
                    <div class="wrapcontent__right">
                        <div class="title"> <span>{{movieData.title}}</span> {{ `( ${ movieData.release_date.split('-')[0] } )` }} </div>
                        <div class="about"> 
                            <div class="first">{{ movieData.release_date }}</div>
                            <div class="second">
                                <span v-for="(genre, index) in getGenres" :key="index">
                                    {{ genre.name }}
                                </span>
                            </div>
                            <div class="third">
                                {{ timeConvert(movieData.runtime) }}
                            </div>
                        </div>
                        <div class="metric">

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </a-modal>

</template>
<script>

/*
About  MovieModal
==================

1.) So, when you touch the name of the movie, it open like a pop-up
2.) In this modal, It shows all the short summary about the movie like a poster.


props
======
isMovieModalVisible: Boolean, --> whether to open or close the modal.
movieId: Number, --> given movie id is used to fetch the movie data.
*/

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
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally( ()=> {
                this.loading = false;
            })

        },
        timeConvert(num) {
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            return `${rhours}h ${rminutes}m`
        }
    },
    computed:{
        getGenres(){
            let array = this.movieData.genres;
            if(array.length<3){
                return array;
            }
            else{
                return array.slice(2);
            }
        }
    },
    created(){
        this.fetchMovieData();
    }
}
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Lato:400,700";

.wrapcontent{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 370px;
  
}

.wrapcontent .wrapcontent__left{
    width: 30%;
    height: 100%;
 
    z-index: 2;
   
  
}
.wrapcontent .wrapcontent__left .img-wrap{
    padding: 5px;
    height: 100%;
}
.wrapcontent .wrapcontent__left .img-wrap img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

.wrapcontent .wrapcontent__right{
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    padding: 5px;
}
.wrapcontent .wrapcontent__right .title{
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 2.2rem;
}
.wrapcontent .wrapcontent__right .title span{
    font-weight: 600;
}

.about, .metric{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.1em
}
/* .about .first{

}
.about .second{

}
.about .second span{
    margin: 3px;
}
.about .third{
    
} */





</style>