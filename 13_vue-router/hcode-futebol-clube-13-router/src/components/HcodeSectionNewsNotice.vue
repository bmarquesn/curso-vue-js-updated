<template>
    <section class="section-news">
        <div class="container">
            <div class="row div-news">
                <div class="col-6">
                    <img :src="require(`../assets/${notice.img}`)" :alt="notice.imgInfo" />
                </div>
                <div class="col-6">
                    <h2>{{ notice.title }}</h2>
                    <p>{{ notice.content }}</p>
                    <div class="text-right"><em>{{ formatDate(notice.date) }}</em></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Utils from '../mixins/UtilsMixin';
var noticeSelected;
export default {
    created() {},
    computed: {
        notice() {
            noticeSelected = this.$store.getters.getNewsFromId(this.$route.params.idnotice);
            return noticeSelected[0];
        }
    },
    mixins: [
        Utils
    ]
}
</script>

<style scoped>
h2 {
    color:#fff;
    cursor:auto;
}
</style>