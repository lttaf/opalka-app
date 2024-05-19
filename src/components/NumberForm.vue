<template>
  <div>
    <v-form>
        <v-text-field v-model="name" label="Имя" />
        <v-text-field v-model="color" label="Цвет числа" />
        <v-text-field v-model="backgroundColor" label="Цвет фона" />
    </v-form>
    <div class="d-flex">
        <v-btn @click="onCancel" variant="text">Отмена</v-btn>
        <v-btn @click="onSubmit">Подтвердить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            color: "#ffffff",
            backgroundColor: "#000000",
        }
    },

    methods: {
        onCancel() {
            this.$emit('cancel-form')
        },
        onSubmit() {
            this.$emit('submit-form', { name: this.name, color: this.color, backgroundColor: this.backgroundColor })
        },
    },
}
</script>

<style>

</style>