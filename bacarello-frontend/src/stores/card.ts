import { defineStore } from "pinia";
import { ref } from "vue";
export interface ListItem {
    id?: number
    label: string
    checked?: boolean
}
export const useCardCheckList = defineStore('checkList', () => {
    const items = ref<ListItem[]>([
        { id: 1, label: 'First task', checked: false },
        { id: 2, label: 'Second task', checked: true },
        { id: 3, label: 'Third task', checked: false }
    ])
    function addItem(itemLabel: ListItem | undefined):void{
        if (itemLabel && itemLabel.label != '') {
            items.value.push({
                id: Date.now(),
                label: itemLabel.label,
                checked: false
              })
        }
    }
    return {items, addItem}
})