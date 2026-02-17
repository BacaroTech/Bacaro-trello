<script lang="ts" setup>
import Navbar from '@/layout/Navbar.vue';
import { CircleX } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
const route = useRouter()
</script>

<template> 
    <CircleX class="absolute right-5 top-5" :size="28" @click="route.back()"/>
    <div>
        Prova
    </div>
</template>