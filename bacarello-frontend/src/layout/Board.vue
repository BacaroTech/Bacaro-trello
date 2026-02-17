<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue';
const drag = ref(false)
interface Task {
    id: string
    title: string
    description?: string
    labels?: string[]
    endTask?: string
}

interface Column {
    id: string
    name: string
    tasks: Task[]
}

const trelloMock = ref<Column[]>([
    {
        id: 'todo',
        name: 'To Do',
        tasks: [
            {
                id: 'task-1',
                title: 'Design login page',
                description: 'Create responsive UI for login',
                labels: ['design', 'ui'],
                endTask: '2026-02-20'
            },
            {
                id: 'task-2',
                title: 'Setup Pinia store',
                labels: ['backend']
            }
        ]
    },
    {
        id: 'in-progress',
        name: 'In Progress',
        tasks: [
            {
                id: 'task-3',
                title: 'Implement drag & drop',
                labels: ['feature'],
                endTask: '2026-02-18'
            }
        ]
    },
    {
        id: 'done',
        name: 'Done',
        tasks: [
            {
                id: 'task-4',
                title: 'Project scaffolding',
                labels: ['setup']
            }
        ]
    }
])
</script>
<template>
    <div class="flex gap-6">
        <div v-for="column in trelloMock" :key="column.id" class="w-64 bg-muted p-4 rounded-xl ">
            <h3 class="font-semibold mb-3">{{ column.name }}</h3>
            <draggable v-model="column.tasks" group="tasks" item-key="id" class="space-y-2 cursor-pointer">
                <template #item="{ element }">
                    <div class="bg-background p-3 rounded-lg shadow-sm">
                        <p class="font-medium">{{ element.title }}</p>
                        <p v-if="element.description" class="text-sm text-muted-foreground">
                            {{ element.description }}
                        </p>
                    </div>
                </template>
            </draggable>
        </div>
    </div>

</template>