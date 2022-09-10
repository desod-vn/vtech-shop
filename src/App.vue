<script setup>
import { RouterView } from "vue-router";
import Header from "@/layouts/Header.vue"
import { onMounted, ref } from "vue";
import { getToken } from '@/services/tokenService';

onMounted(async () => {
  const { data } = await getToken();
  const token = data.data.token;

  localStorage.setItem('token', token)
});

const tab = ref('home');
const search = ref('');

const handleChangeTab = (value) => tab.value = value;
const handleSearch = (value) => search.value = value;
</script>

<template>
  <Header
    :tab="tab"
    @on-change-tab="handleChangeTab"
    @on-search="handleSearch"
  />
  <RouterView
    :tab="tab"
    :search="search"
    @on-change-tab="handleChangeTab"
  />
</template>