<!--Első rész. Megjelenés -->
<template>
    <h1>{{Title}}</h1> 
    <h4>{{msg}}</h4>
</template>

<!--Második rész a script. Logika -->
<script>
export default {
    //data() függ. adatot küld, amelyet dinamikusan tudunk kötni a statikus Html -hez.
    data(){
        return{
            Title: "Test",
            msg:   "Ez valóban működik",
        }; 
    },
    mounted(){
        //mounted = felszerelve
        //debugger;//debugger indítása.
        console.log("I'm mounted!");
    },
};
</script>

<!--Harmadik a CSS rész. Stílus -->
<style scoped>

</style>