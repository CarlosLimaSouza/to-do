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
          <td scope="row">
            <span :class="{ riscado: tarefa.status === 'Finalizado' }">{{
              tarefa.name
            }}</span>
          </td>
          <td>
            <span
              class="pointer"
              @click="mudarStatus(index)"
              :class="{
                'text-danger': tarefa.status === 'A fazer',
                'text-warning': tarefa.status === 'Em andamento',
                'text-success': tarefa.status === 'Finalizado',
              }"
              >{{ tarefa.status }}</span
            >
          </td>
          <td>
            <div class="text-center" @click="editarTarefa(index)">
              <span><fa icon="pen" /></span>
            </div>
          </td>
          <td>
            <div class="text-center" @click="deletarTarefa(index)">
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
      tarefaEditada: null,
      statusDisponivel: ["A fazer", "Em andamento", "Finalizado"],
      tarefas: [
        {
          name: "terminar meu portfolio",
          status: "A fazer",
        },
        {
          name: "Media query disney clone",
          status: "A fazer",
        },
        {
          name: "App to-do adicionar pomodoro",
          status: "A fazer",
        },
      ],
    };
  },
  methods: {
    enviarTarefa() {
      if (this.escreverTarefa.length === 0) return;
      if (this.tarefaEditada === null) {
        this.tarefas.push({
          name: this.escreverTarefa,
          status: "to-do",
        });
      } else {
        this.tarefas[this.tarefaEditada].name = this.escreverTarefa;
        this.tarefaEditada = null;
      }
      this.escreverTarefa = "";
    },
    deletarTarefa(index) {
      this.tarefas.splice(index, 1);
    },
    editarTarefa(index) {
      this.escreverTarefa = this.tarefas[index].name;
      this.tarefaEditada = index;
    },
    mudarStatus(index) {
      let newIndex = this.statusDisponivel.indexOf(this.tarefas[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tarefas[index].status = this.statusDisponivel[newIndex];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pointer {
  cursor: pointer;
}
.riscado {
  text-decoration: line-through;
}
</style>
