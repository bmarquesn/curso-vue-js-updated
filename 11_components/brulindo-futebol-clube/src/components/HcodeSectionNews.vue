<template>
    <section>
        <div class="container">
            <!-- <HcodeSectionNewsIndividual /> -->
            <hcode-section-news-individual />
            <hcode-section-news-individual />
            <hcode-section-news-individual />
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual.vue';

export default {
    components: {
        HcodeSectionNewsIndividual
    }
}
</script>

<style scoped>
section {
    background: orange;
    margin-top: 25px;
    padding: 50px 0;
}
</style>