<script lang="ts" setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useCardCheckList } from '@/stores/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
const cardEntity = useCardCheckList()
import type { ListItem } from '@/stores/card';
const newItem = ref<ListItem>({
    label: ''
})
const toggleNewItem = ref<boolean>(false)
</script>
<template>
    <section class="grid grid-cols-[auto_1fr]">
        <draggable v-model="cardEntity.items" item-key="id" tag="ol" class="space-y-2 col-span-2">
            <template #item="{ element }">
                <li class="flex items-center gap-2 cursor-move">
                    <Checkbox v-model="element.checked" />
                    <label class="w-full hover:bg-accent p-2 rounded-lg text-sm">
                        {{ element.label }}
                    </label>
                </li>
            </template>
        </draggable>
        <Button  v-show="!toggleNewItem" @click="toggleNewItem = true">Add a item</Button>
        <div v-show="toggleNewItem">
            <Input v-model="newItem.label"/>
            <div class="flex justify-start gap-2 py-2">
                <Button @click="cardEntity.addItem(newItem)">Add</Button>
                <Button @click="toggleNewItem = false">Cancel</Button>
            </div>
        </div>

    </section>
</template>