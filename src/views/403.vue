<script setup lang="ts">

</script>

<template>
    <div id="main">
        <div class="fof">
            <h1>NOT ALLOW 403</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
#main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
}

.fof{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fof h1{
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
}

@keyframes type{
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>