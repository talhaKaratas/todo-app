<template>
  <div class="task__read">
    <table>
      <tr>
        <td>
          <input
            type="checkbox"
            @change="changeStatus"
            :checked="task.completed"
          />
        </td>
        <td class="column__middle">
          <p class="task__text">{{ task.task }}</p>
        </td>
        <td>
          <small @click="deleteTask">sil</small>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  methods: {
    deleteTask() {
      this.$store.commit('setHomeIsLoading', true)
      this.$store.dispatch('deleteTask', this.task).then(() => {
        this.$store.commit('setHomeIsLoading', false)
      })
    },
    changeStatus() {
      this.task.completed = !this.task.completed
      this.$store.commit('setHomeIsLoading', true)
      this.$store.dispatch('isCompleteTask', this.task).then(() => {
        this.$store.commit('setHomeIsLoading', false)
      })
    }
  }
}
</script>

<style>
.task__read {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 20px 0;
  height: fit-content;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.4);
}

.task__read p {
  font-size: 14px;
  margin-left: 10px;
}

.task__read small {
  font-size: 14px;
  cursor: pointer;
}

.task__read small:hover {
  color: red;
}

table {
  table-layout: auto;
  width: 100%;
}

.column__middle {
  table-layout: auto;
  width: 100%;
}
</style>
