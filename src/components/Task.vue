<template>
  <div class="task__read">
    <div class="taskRead__left">
      <input type="checkbox" @change="changeStatus" :checked="task.completed" />
      <p class="task__text">{{ task.task }}</p>
    </div>
    <small @click="deleteTask">sil</small>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  methods: {
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task)
    },
    changeStatus() {
      this.task.completed = !this.task.completed
      this.$store.dispatch('isCompleteTask', this.task)
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
  justify-content: space-between;
  padding: 0 10px;
  margin: 20px 0;
  height: 40px;
}

.taskRead__left {
  display: flex;
  align-items: center;
}

.taskRead__left p {
  font-size: 16px;
  margin-left: 10px;
}

.task__read small {
  font-size: 14px;
  cursor: pointer;
}

.task__read small:hover {
  color: red;
}
</style>
