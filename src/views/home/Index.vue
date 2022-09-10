<script setup>
import { onMounted, ref, watch , defineEmits, defineProps } from 'vue';
import { list as listCategories } from '@/services/categoryService';
import { list as listProducts } from '@/services/productService';
import ListCategory from '@/components/ListCategory.vue';
import ListProduct from '@/components/ListProduct.vue';
import Banner from '@/views/home/components/Banner.vue';

const categories = ref([]);
const products = ref([]);
const productsLoading = ref(false);
const categoriesLoading = ref(false);
const perPage = ref(20);
const pageIndex = ref(1)
const categoryId = ref([]);
const category = ref({});

const emits = defineEmits(['on-change-tab']);
const props = defineProps({
  tab: {
    type: String,
  },
  search: {
    type: String,
    default: null
  }
})

watch([pageIndex, categoryId], () => getProducts())

watch(
  () => props.tab,
  () => {
    if (props.tab == 'home') {
      category.value = {}
      categoryId.value = []
      getProducts();
    }
})

watch(
  () => props.search,
  () => {
    if (!props.search) {
      return;
    }
    emits('on-change-tab', 'search');
    getProducts();
})

const getCategories = async () => {
  categoriesLoading.value = true;
  const { data } = await listCategories();
  categories.value = data.data;
  categoriesLoading.value = false;
}

const getProducts = async () => {
  productsLoading.value = true;
  const payload = {
    filter: {
      danhMucSpId: categoryId.value,
      text: props.search,
      nguoiPhuTrach: null
    },
    pageSize: perPage.value,
    pageIndex: pageIndex.value
  }
  const { data } = await listProducts(payload);
  products.value = data.data;
  productsLoading.value = false;
}
const handleClickCategory = (value) => {
  categoryId.value = [value.id]
  category.value = value;
  emits('on-change-tab', 'category');
};

const handleChangePageIndex = (value) => pageIndex.value = value;

onMounted(() => {
  getCategories();
  getProducts();
})

</script>

<template>
  <div class="container mx-auto">
    <div class="mt-4 flex flex-row">
      <div class="basis-1/4">
        <q-inner-loading
          :showing="categoriesLoading"
          label="Vui lòng đợi..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
        <div v-show="!categoriesLoading">
          <ListCategory
            :categoryId="categoryId[0]"
            :categories="categories"
            @on-click-category="handleClickCategory"
          />
        </div>
      </div>
      <div class="basis-3/4 p-2">
        <q-inner-loading
          :showing="productsLoading"
          label="Vui lòng đợi..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
        <div v-show="!productsLoading">
          <div v-if="tab == 'category'">
            <h3>DANH MỤC: {{category.tenLoaiSanPham || 'Tất cả'}}</h3>
          </div>
          <div v-else-if="tab == 'search'">
            <h3>Tìm kiếm: {{search || 'Tất cả'}}</h3>
          </div>
          <Banner v-else />
          <ListProduct
            :products="products"
            :perPage="perPage"
            @on-change-page-index="handleChangePageIndex"
          />
        </div>
      </div>
    </div>
  </div>

</template>