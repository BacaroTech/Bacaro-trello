import { defineStore } from "pinia"
import { ref } from "vue"

export interface BoardView{
    id?: number
    title: string
    label: string
    owner?: number
}
export const useBoardDataStore = defineStore('boardData', () => {
    const homeUserBoards = ref<BoardView[]>([
        {
            id: 1,
            title: 'Bacaro',
            label: 'Bacaro Test',
        },
        {
            id: 2,
            title: 'Bacaro2',
            label: 'Bacaro Prova'
        }
    ])
    function createBoard(board: BoardView):void{
        homeUserBoards.value.push(board)
    }
    return {homeUserBoards, createBoard}
})