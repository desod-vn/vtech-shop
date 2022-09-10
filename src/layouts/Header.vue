<script setup>
import logo from "@/assets/logo.png"
import { ref, defineProps, watch, defineEmits } from 'vue'
import menu from '@/constants/menu';

const props = defineProps({
  tab: {
    type: String,
    default: 'home'
  }
})
const emits = defineEmits([
  'on-change-tab',
  'on-search'
]);
const search = ref('');

watch(() => props.tab, () => {
  emits('on-change-tab', props.tab)
  if(props.tab != 'search') {
    search.value = '';
    emits('on-search', search.value)
  }
})
</script>

<template>
  <div class="">
    <div class="bg-slate-200 flex justify-between">
      <div>
        <i class="fa-duotone fa-mailbox"></i>
      </div>
      <div>
        <i class="fa-solid fa-phone"></i>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="py-4 flex justify-between items-center">
        <router-link :to="{ name: 'home' }">
          <img :src="logo" class="h-16" alt="" />
        </router-link>

        <q-input
          square
          outlined
          v-model="search"
          label="Tìm kiếm sản phẩm"
          @keyup.enter="emits('on-search', search)"
        />
      </div>
      <q-tabs
        v-model="tab"
        no-caps
        class="bg-orange text-white"
      >
        <q-tab
          v-for="item in menu"
          :name="item.name"
          :label="item.label"
        />
      </q-tabs>
    </div>
  </div>

</template>