import { defineStore } from "pinia";
import { getAllShows, getShowById, searchShowByName} from '../services/showService'
import { Show } from "../types/Show";


export const useShowStore = defineStore('showStore', {
    state: ()=>({
        shows: [] as Show[],
        selectedShow: null as Show | null,
        loading:false,
        error:null as string | null,
    }),

    actions: {
        async fetchAllShows(){
            this.loading = true;
            this.error = null;
            try{
                this.shows = await getAllShows()
            }catch(error){
                this.error = 'Failded to fetch shows'
            }finally{
                this.loading = false
            }
            
            
        },

        async fetchShowById(id:number){
            this.loading = true;
            this.error=null;
            try{
                this.selectedShow = await getShowById(id)
            }catch(error){
                console.error(error)
                this.error = 'Failded to fetch shows details'
            }finally{
                this.loading = false
            }
            
            
        },

        async searchShows(query:string){
            this.loading = true
            this.error = null;
            try{
                this.shows = await searchShowByName(query)
            }catch{
                this.error = 'Failded to search shows'
            }finally{
                this.loading = false
            }
            
            
        }
    }
})