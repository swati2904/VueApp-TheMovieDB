<template>
  <a-table 
    :columns="columns" 
    :dataSource="datasource" 
    :loading="loading"  
    size="small"
    :pagination="{ pageSize: pageSize, total: totalResults }"
    :scroll="{ y: 240 }"
    @change="$emit('onPaginationChange',$event)"
  >
  </a-table>
    <!-- <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        :key="tag"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span> -->
  
</template>
<script>

export default {
  props:{
    columns: Array,
    datasource: Array,
    loading: Boolean,
    pageSize: Number,
    totalResults: Number
  }
};
</script>