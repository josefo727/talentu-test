<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <Form />
      </div>
      <div class="col-sm-12 col-md-8">
        <Users />
      </div>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue';
import Users from './components/Users.vue';
import { mapActions } from 'vuex'

export default {
  name: 'Index',
  components: {
    Form,
    Users
  },
  mounted() {
    this.initialLoadUsers();
  },
  methods: {
    ...mapActions('usersModule', ['initialLoadUsers'])
  }
}


</script>

<style scoped>



.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
