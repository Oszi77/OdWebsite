<!--Első rész. Megjelenés -->
<template>
    <h1>{{Title}}</h1> 
    <p>{{msg}} az én nevem {{myName}}</p>
    <p>Matematikai kifejezések használata 1+2 = {{1 + 2}}</p>
    <p>Felételes kifejezések: {{1 === 1 ? "Helló" : "Godd By!"}}</p>
    <p>Négyzetgyök, 4 négyzetgyöke: {{Math.sqrt(4)}}</p>
    <p> 2 a harmadikon: {{2**3}}</p>
    <p>Ezt az értéket metódusból írtam ki: {{Method}}(5 X 6)</p>
    <h3>A PHP API -ról olvasaott adatok: </h3>
    <p>Neve: {{apiData.name}}</p>
    <p>Fordulatszám: {{apiData.rotation_period}}</p>
    <p>Pálya periódus: {{apiData.orbital_period}}</p>
    <p>Átmérő: {{apiData.diameter}}</p>
    <p>Éghajlat: {{apiData.climate}}</p>
    <p>Gravitációs színt: {{apiData.gravity}}</p>
    <p>Föld felszín: {{apiData.terrain}}</p>
    <p>Víz felszín: {{apiData.surface_water}}</p>
    <p>Populáció: {{apiData.population}}</p>
    <p>Rezidens: {{apiData.residents}}</p>
    <p>Filmek: {{apiData.films}}</p>
    <p>Bejegyzés dátuma: {{apiData.created}}</p>
    <p>Módosítva: {{apiData.edited}}</p>
    <p>Elérhetőség: 
        <a href="http://swapi.dev/api/planets/3/">{{apiData.url}}</a>
    </p>
</template>

<!--Második rész a script. Logika -->
<script>

import { gsap } from "gsap/dist/gsap";
import axios from 'axios';

export default {
    //data() meto. adatot küld, amelyet dinamikusan tudunk kötni a statikus Html -hez.
    data(){
        //Egy adat objektummal tér vissza.
        return{
            Title: "Test",
            myName: "Erdei Oszkár",
            msg:    "Üdvözöllek az oldalon",
            Method:  null,
            apiData: {}//Üres objektumnak kell deffiniálni.
        }; 
    },
    //Saját metódusok csatolása, amely egy metódusok tömbje lesz.
    methods: {
        myMethod(a, b){
            return a*b;
        }
    },
    
    //mounted = felszerelve
    mounted(){
        //debugger;//debugger indítása.
        //this.myName = "Valami más";//felülírjuk a data() -ban deklarált változót.
        //console.log("munted hívódik meg!");
        this.Method = this.myMethod(5, 6);//Meghívjuk az adott nevű saját metódust.
        //ease: mozgás fajtája pl: rugózás, lsd. dokumentációban.
        gsap.from('h1', {opacity: 0, duration: 1, y: -50, ease: 'elastic(1, 0.3)'});
        //PHP API használata.
        axios
           .get('https://swapi.dev/api/planets/3/')
           //.then(response => (console.log(response)))
           .then(response => (this.apiData = response.data));
        },
    }
</script>

<!--Harmadik a CSS rész. Stílus -->
<style scoped>

</style>