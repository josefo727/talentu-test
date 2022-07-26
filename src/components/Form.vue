<template>
  <b-card-group deck>
    <b-card
        header="Nuevo Usuario"
        header-tag="header"
    >
      <form @submit.prevent="insertUser()">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" required class="form-control" id="email" v-model="user.email">
        </div>
        <div class="mb-3">
          <label for="first_name" class="form-label">Nombre(s)</label>
          <input type="text" required class="form-control" id="first_name" v-model="user.first_name">
        </div>
        <div class="mb-3">
          <label for="last_name" class="form-label">Apellido(s)</label>
          <input type="text" required class="form-control" id="last_name" v-model="user.last_name">
        </div>
        <div class="mb-3">
          <label for="date_of_birth" class="form-label">Fecha de Nacimiento</label>
          <input type="date" required class="form-control" id="date_of_birth" v-model="user.date_of_birth">
        </div>
        <button type="submit" class="btn btn-primary float-end">Agregar</button>
      </form>
    </b-card>
  </b-card-group>
  <b-card-group class="mt-2">
    <b-card>
      <div class="row">
        <button @click="cleanForm()" type="button" class="btn btn-sm btn-outline-primary mx-1">Limpiar Formulario</button>
        <button @click="resetEverything()"  type="button" class="btn btn-sm btn-outline-danger mx-1 mt-3">Resestablecer toda la data</button>
      </div>
    </b-card>
  </b-card-group>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Form",
  data() {
    return {
      user: {
        email: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
      }
    }
  },
  methods: {
    ...mapActions('usersModule', ['addUser', 'initialLoadUsers']),
    async insertUser() {
      await this.addUser(this.user);
      this.cleanForm();
    },
    cleanForm() {
      this.user = {
        email: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
      }
    },
    resetEverything() {
      this.initialLoadUsers(true);
      this.cleanForm();
    }
  }
}
</script>

<style scoped>

</style>