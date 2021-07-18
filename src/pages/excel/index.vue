<template>
  <div class="export-excel">
    <json-to-excel></json-to-excel>
  </div>
</template>

<script>
import JsonToExcel from 'components/jsonToExcel'
export default {
  name: 'export-excel',
  components: {
    JsonToExcel
  }
 }
</script>
