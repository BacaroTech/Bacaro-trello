<script lang="ts" setup>
import Navbar from '@/layout/Navbar.vue';
import BottomBar from '@/layout/BottomBar.vue';
import Board from '@/layout/Board.vue';
import { useActiveBoardsStore } from '@/stores/active-board';
const bottom = useActiveBoardsStore();

</script>
<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <Navbar />
        </header>
        <main class="flex-1">
            <div class="flex justify-center gap-4">
                <div v-for="board in bottom.activeBoard" :key="board.id">
                    <transition>
                        <div v-if="board.id === 'board'">
                            <Board />
                        </div>
                        <span v-else>{{ board.label }}</span>
                    </transition>

                </div>
            </div>
        </main>

        <footer class="flex justify-center py-4">
            <BottomBar />
        </footer>
    </div>
</template>