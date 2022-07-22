<template>
  <div class="main-container">
    <h2 class="text-center mt-5 mb-5 text-dark titulo">Meu to-do app</h2>

    <!-- inputs -->
    <div class="text__input d-flex mb-3 bg-transparent">
      <input
        type="text"
        placeholder="Sua tarefa"
        class="form-control"
        v-model="escreverTarefa"
        @keyup.enter="enviarTarefa"
      />
      <button @click="enviarTarefa" class="btn btn-primary rounded-2">
        Confirmar
      </button>
    </div>
    <!-- tabela de tarefas -->
    <table class="tabela table table-bordered bg-white rounded">
      <thead class="border border-dark">
        <tr class="text-light bg-dark">
          <th class="tabela__head--tarefas" scope="col">Tarefas</th>
          <th class="text-center" scope="col">Progresso</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody class="border border-secondary tabela__corpo">
        <tr v-for="(tarefa, index) in tarefas" :key="index">
          <td class="tabela__corpo--tarefas" scope="row">
            <span
              class="text-break"
              :class="{ riscado: tarefa.status === 'Finalizado' }"
              >{{ tarefa.name }}</span
            >
          </td>
          <td class="text-center">
            <span
              class="pointer"
              @click="mudarStatus(index)"
              :class="{
                'btn btn-danger': tarefa.status === 'A fazer',

                'btn btn-warning text-white': tarefa.status === 'Em andamento',

                'btn btn-success': tarefa.status === 'Finalizado',
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
          name: "Terminar meu portfolio",
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
@import "../sass/styles.scss";
</style>
