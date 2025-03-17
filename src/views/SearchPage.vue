<template>
    <ion-page>
        <ion-content>
            <ion-button router-link="/">
                Home
            </ion-button>
            <h1>Search Page</h1>
            <ion-input label="id" v-model="query" />
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonInput } from '@ionic/vue';
import { ref } from "vue";
const props = defineProps<{query: string}>();
const query = ref(props.query);
</script>