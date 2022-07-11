<template>
  <div class="main-container">
    <h2 class="text-center mt-5">Meu todo App</h2>

    <!-- inputs -->
    <div class="d-flex">
      <input
        type="text"
        placeholder="Sua tarefa"
        class="form-control"
        v-model="escreverTarefa"
      />
      <button @click="enviarTarefa" class="btn btn-warning rounded-0">
        Submit
      </button>
    </div>
    <!-- tabela de tarefas -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Tarefa</th>
          <th scope="col">Progresso</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarefa, index) in tarefas" :key="index">
          <td scope="row">{{ tarefa.name }}</td>
          <td>{{ tarefa.status }}</td>
          <td>
            <div class="text-center">
              <span><fa icon="pen" /></span>
            </div>
          </td>
          <td>
            <div class="text-center">
              <span><fa icon="trash" /></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {},

  data() {
    return {
      escreverTarefa: "",
      tarefas: [
        {
          name: "terminar meu portfolio",
          status: "to-do",
        },
        {
          name: "Media query disney clone",
          status: "to-do",
        },
        {
          name: "App to-do adicionar pomodoro",
          status: "to-do",
        },
      ],
    };
  },
  methods: {
    enviarTarefa() {
      if (this.escreverTarefa.length === 0) return;

      this.tarefas.push({
        name: this.escreverTarefa,
        status: "to-do",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
