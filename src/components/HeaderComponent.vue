<template>
    <header class="header">
        <h1 class="header-title">
            <span class="header-title-white">Trust</span>
            <span class="header-title-green">worthy</span>
        </h1>
        <nav class="header-nav">
            <router-link to="/" class="header-link">Home</router-link>
            <router-link to="/brands" class="header-link">Brands</router-link>
            <router-link to="/collections" class="header-link"
                >Collections</router-link
            >
            <router-link to="/about" class="header-link">About</router-link>
        </nav>
        <button v-if="isLoggedIn" @click="goToProfile" class="profile-button">
            Profile
        </button>
        <button v-else class="login-button" @click="connectAndSign">
            Log In
        </button>
    </header>
</template>

<script>
import Core from "@/core/wallet";
import { mapActions } from "vuex";

export default {
    name: "HeaderComponent",
    data: function () {
        return {
            isLoggedIn: false,
        };
    },
    methods: {
        ...mapActions(["login"]),
        async connectAndSign() {
            const signer = await this.$root.core.connectWallet();
            if (signer) {
                const result = await this.$root.core.requestSignature(signer);
                if (result) {
                    try {
                        console.log(result);
                        const token = await this.login(result);
                        if (token) {
                            localStorage.setItem(
                                "auth_token",
                                JSON.stringify({
                                    token,
                                    time_creation: ~~(
                                        new Date().getTime() / 1000
                                    ),
                                }),
                            );
                            this.isLoggedIn = true;
                        }
                    } catch (error) {
                        console.log(error);
                        this.isLoggedIn = false;
                    }
                } else {
                    // Handle error during signature
                }
            } else {
                // Handle error connecting wallet
            }
        },
        // TODO: make sure it works correct
        isTimestampOlderThanOneDay(timestamp) {
            // Convert the timestamp to a Date object
            const currentDate = new Date();
            const timestampDate = new Date(timestamp);

            // Calculate the time difference in milliseconds
            const timeDifference = currentDate - timestampDate;

            // Calculate the time difference in seconds
            const timeDifferenceInSeconds = timeDifference / 1000;

            // Calculate the number of seconds in a day
            const secondsInOneDay = 24 * 60 * 60;

            // Compare the time difference with one day's worth of seconds
            return timeDifferenceInSeconds > secondsInOneDay;
        },
        redirectToBaseURL() {
            this.$router.push({ name: "home" }); // Navigate to the named route
        },
        goToProfile() {
            this.$router.push("/profile"); // Navigate to the "Profile" page
        },
    },
    created() {
        this.$root.core = new Core();
        // TODO: make sure it works correct
        const isTimestampFresh = this.isTimestampOlderThanOneDay(
            JSON.parse(localStorage.getItem("auth_token"))?.time_creation,
        );
        this.isLoggedIn =
            isTimestampFresh === undefined ? false : isTimestampFresh;
    },
};
</script>

<style scoped>
@import "../styles/Header.css";
</style>
