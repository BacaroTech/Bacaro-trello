import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export interface BottomBar{
    id: string
    label: string
    active?: boolean
}
export const useActiveBoardsStore = defineStore('boards', () => {
    const boards = ref<BottomBar[]>([])
    function toggleBoard(board: BottomBar){
        board.active = !board.active  
    }
    const activeBoard = computed(() => boards.value.filter(e => e.active))
    return{
        boards,
        toggleBoard,
        activeBoard
    }
})