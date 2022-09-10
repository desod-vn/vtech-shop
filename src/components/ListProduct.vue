<script setup>
import { defineProps, ref, defineEmits } from 'vue';

const emits = defineEmits(['on-change-page-index'])
const props = defineProps({
  products: {
    type: Object,
    default: []
  },
  perPage: {
    type: Number,
    default: 20
  }
})

const pageIndex = ref(1);

const handle = (value) => {
  pageIndex.value = value;
  emits('on-change-page-index', value)
}

</script>

<template>
  <div>
    <div class="p-3">
      <h5>DANH SÁCH SẢN PHẨM</h5>
    </div>
    <div class="flex flex-row flex-wrap justify-between">
      <div v-for="product in products.data" class="basis-1/4 p-5">
        <q-card>
          <img :src="product.anhSanPham || 'https://cdn.quasar.dev/img/mountains.jpg'">
          <q-card-section class="flex align-center" style="min-height: 120px;">
            <div>
              <div class="text-subtitle2">
                {{ product.ten }}
                <q-chip dense color="orange" text-color="white" icon-right="star">{{product.trangThai}}</q-chip>
              </div>
              <div>Giá bán: {{ product.giaBan.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</div>
            </div>

          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-btn round color="primary" icon="shopping_cart" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="flex justify-center bg-slate-200 p-5">
      <q-pagination
        v-model="pageIndex"
        :max="Math.floor(products.totalRecords / 20)"
        :max-pages="7"
        @update:model-value="handle"
        direction-links
        boundary-links
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
      />
    </div>
  </div>

</template>