<script setup>
import { ref } from 'vue'
  
const slide = ref(1);
const autoplay = ref(true);
</script>

<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide :name="1" img-src="https://mcdn.remaxvietnam.vn/asset/images/BoSuuTap/chuyen-muc-slider/phu-kien-dien-thoai/banner-phu-kien-dien-thoai-desktop-2022-16022022.jpg" />
    <q-carousel-slide :name="2" img-src="https://mcdn.remaxvietnam.vn/asset/images/BoSuuTap/chuyen-muc-slider/phu-kien-o-to/banner-phu-kien-o-to-desktop-2022-16022022.jpg" />
    <q-carousel-slide :name="3" img-src="https://mcdn.remaxvietnam.vn/asset/images/BoSuuTap/chuyen-muc-slider/do-gia-dung-thong-minh/banner-do-gia-dung-thong-minh-desktop-2022-16022022.jpg" />
    <q-carousel-slide :name="4" img-src="https://mcdn.remaxvietnam.vn/asset/images/BoSuuTap/chuyen-muc-slider/thiet-bi-am-thanh/banner-thiet-bi-am-thanh-2022-16022022.jpg" />
  </q-carousel>
</template>