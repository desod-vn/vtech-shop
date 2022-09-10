<script setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['on-click-category'])
const props = defineProps({
  categories: {
    type: Array,
    default: []
  },
  categoryId: {
    type: Number,
  }
})
</script>

<template>
  <div>
    <div class="p-3">
      <h5>DANH MỤC SẢN PHẨM</h5>
    </div>
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="category in categories"
        :active="categoryId == category.id"
        active-class="bg-teal-1 text-grey-8"
        @click="emits('on-click-category', category)"
      >
        <q-item-section>{{ category.tenLoaiSanPham }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>