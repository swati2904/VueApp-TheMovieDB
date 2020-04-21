<template>
    <div class="movie-section" >
        <section class="inner">
            <div id="media">
                <div class="coloumn_wrapper">
                    <div class="title">
                        <h1>cinematograph</h1>
                        <h2>The best of Movies list is here.</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

/*

About
======

Header Try to give the outlook like the proper content inside it.
*/
export default {
    
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Lato:400,700";
.section{
    width: 100%;
    margin: 0;
    padding: 0;
}
.inner{
    background-image: url("https://psmedia.playstation.com/is/image/psmedia/the-last-of-part-2-wallpaper-desktop-2_1580722794747?$Icon$");
}
.coloumn_wrapper{
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    padding: 110px 20px;
}
.title {
    width: 100%;
    margin-bottom: 20px;
}
h1 {
font-size: 5em;
  text-transform: uppercase;
  color:rgb(206, 212, 210);
  font:bolder;
  line-height: 1;
  text-shadow: 5px 5px 5px rgb(115, 192, 192);

  
}
h2{
    /* font-size: 2em; */
    font-weight: lighter;
    margin: 0;
    color: #4fc08d;
    font-family: 'Tangerine', serif;
    font-size: 30px;
    text-shadow: 4px 4px 4px #aaa;

    
}


</style>