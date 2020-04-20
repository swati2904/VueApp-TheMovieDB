<template>
   <div class="outer">
        <div class="button">
            <p class="text">{{title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "TableHeader",
    props:{
        title: {
            type: String,
            required: true,
            default: 'Table Title'
        },

    }
    
}
</script>
<style scoped>
p{
    margin: 0;
    padding: 0;
}
.outer {
  width:100%;
  height:60px;
}

.button {
  border-bottom: 1px solid black;
  width:100%;
  height: 100%;
  display: block;
  background: linear-gradient(to right, #304455 50%, #4fc08d 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .4s ease-out;
}

.button:hover {
  background-position: left bottom;
}

.text {
    font-size: 30px !important;
    font-weight: 600;
    padding-top: 14px;
    text-transform: uppercase;
    height: 100%;
    width: 100%;
    
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: black;
  transition: all .4s ease-out;
  display: block;
  cursor:default
}

.text:hover {
  color: white;  
}
</style>