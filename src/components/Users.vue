<template>
  <b-card-group deck class="mt-sm-3 mt-md-0">
    <b-card
        header="Lista de Usuarios"
        header-tag="header"
    >
      <b-table responsive :items="users" :fields="fields" />
    </b-card>
  </b-card-group>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Users",
  data() {
    return {
      fields: ['id', 'nombre', 'edad', 'email']
    }
  },
  computed: {
    ...mapGetters('usersModule', {
      users: 'getUsers'
    }),
  }
}
</script>

<style scoped>

</style>