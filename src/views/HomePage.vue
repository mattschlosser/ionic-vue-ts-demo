<template>
    <ion-page>
        <ion-content>
            <ion-button router-link="/about">
                About
            </ion-button>
            <ion-button :router-link="{name: 'user', params: {username: 'cindy'}}">
                    <!--   ^? -->
                Cindy
            </ion-button>
            <ion-button :router-link="{name: 'about'}">
                About
            </ion-button>
            <ion-button :router-link="{path: '/search', query: {id: 42}}">
                Search for 42
            </ion-button>
            <ion-button :router-link="{name: 'about', hash: '#history'}">
                Our History
            </ion-button>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
</script>