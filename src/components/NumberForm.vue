<template>
    <div>
        <div>
            <v-form ref="numberForm" @submit.prevent>
                <v-text-field :class="formField + ' my-1'" v-model="author" label="Имя" :rules="basicRule" />
                <v-text-field :class="formField + ' my-1'" v-model="message" label="Сообщение" />
                <div :class="formField + ' d-flex'">
                    <div class="align-self-center">
                        <div class="icon-container" :style="`background-color: ${backgroundColor}`">
                            <span class="icon-text" :style="`color: ${color}`">0</span>
                        </div>
                    </div>
                    <div class="ml-5" style="width: 100%;">
                        <v-menu location="right" offset="10" :close-on-content-click="false">
                            <template v-slot:activator="{ props }">
                                <v-text-field class="my-1" v-bind="props" readonly :model-value="color" label="Цвет числа" :rules="basicRule" />
                            </template>
                            <v-color-picker v-model="color" mode="hex" hide-inputs></v-color-picker>
                        </v-menu>
                        <v-menu location="right" offset="10" :close-on-content-click="false">
                            <template v-slot:activator="{ props }">
                                <v-text-field class="my-1" v-bind="props" readonly :model-value="backgroundColor"
                                    label="Цвет фона" :rules="basicRule" />
                            </template>
                            <v-color-picker v-model="backgroundColor" mode="hex" hide-inputs></v-color-picker>
                        </v-menu>
                    </div>
                </div>
            </v-form>
        </div>  
        <div class="d-flex my-5 form-field">
            <v-btn @click="onCancel" :disabled="loading" color="pink" variant="plain">Отмена</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="onSubmit" :loading="loading" color="black" variant="tonal">Подтвердить</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            author: "",
            color: "#ffffff",
            backgroundColor: "#000000",
            message: "",

            basicRule: [(v) => !!v.length || "Обязательное поле"]
        }
    },

    props: {
        loading: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        formField() {
            if (this.$vuetify.display.xs) return "form-field--mini"
            else return "form-field--average"
        },
    },

    methods: {
        onCancel() {
            this.$emit('cancel-form')
        },
        onSubmit() {
            this.$refs.numberForm.validate().then((resp) => {
                if (resp.valid)
                this.$emit('submit-form', { author: this.author, message: this.message, font_color: this.color, background_color: this.backgroundColor })
            })
        },
    },
}
</script>

<style scoped>
@import "~@/assets/css/styles.css";

.form-field--average {
    min-width: 400px;
}

.form-field--mini {
    min-width: 270px;
}
</style>