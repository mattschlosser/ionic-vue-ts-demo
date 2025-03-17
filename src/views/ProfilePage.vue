<template>
    <ion-page>
        <ion-content>
            <ion-button router-link="/">
                Home
            </ion-button>
            Hello {{ username }}
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
defineProps<{username: string}>();
</script>