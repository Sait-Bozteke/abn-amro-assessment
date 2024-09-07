import { defineStore } from "pinia";
import { Show } from "../types/Show";

export const useGenreStore = defineStore('genreStore', {
    state: ()=>({
        genres : ['Drama', 'Comedy', 'Action']
    })
})