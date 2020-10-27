<template>
    <div id="main">
        <NavBar></NavBar>
        <div id="message">
            <h1>{{message}}</h1>
            <p id="m2">You can take a look at some of the current offers for help</p>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'submissionpage1',
    components: {
        NavBar
    }
}
</script>

<style>

</style>