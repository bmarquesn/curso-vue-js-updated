<template>
    <section>
        <div class="container">
            <!-- <HcodeSectionNewsIndividual /> -->
            <hcode-section-news-individual
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="O SPFC é o melhor time!!!"
                news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut earum, necessitatibus, maxime, sit obcaecati eius reiciendis fugiat porro aliquam dolores ipsam mollitia sed vero at a omnis alias illo amet!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium ea accusantium ipsa ex asperiores officia itaque vitae quidem necessitatibus quam a, amet, quod non error laudantium deleniti. Vel, a.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident itaque quidem ex quod blanditiis deserunt, ullam mollitia tenetur impedit quibusdam odit possimus praesentium quia iste at laboriosam. Nam, vitae."
                news-date="10/01/2020"
             />
            <hcode-section-news-individual
                img-name="news2.jpg"
                img-info="Notícia 2"
                news-title="Começam os Treinos para a Nova Temporada"
                news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut earum, necessitatibus, maxime, sit obcaecati eius reiciendis fugiat porro aliquam dolores ipsam mollitia sed vero at a omnis alias illo amet!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium ea accusantium ipsa ex asperiores officia itaque vitae quidem necessitatibus quam a, amet, quod non error laudantium deleniti. Vel, a.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident itaque quidem ex quod blanditiis deserunt, ullam mollitia tenetur impedit quibusdam odit possimus praesentium quia iste at laboriosam. Nam, vitae."
                news-date="20/01/2020"
            />
            <hcode-section-news-individual
                img-name="news3.jpg"
                img-info="Notícia 3"
                news-title="Um, Dois, Três Pim"
                news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut earum, necessitatibus, maxime, sit obcaecati eius reiciendis fugiat porro aliquam dolores ipsam mollitia sed vero at a omnis alias illo amet!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium ea accusantium ipsa ex asperiores officia itaque vitae quidem necessitatibus quam a, amet, quod non error laudantium deleniti. Vel, a.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident itaque quidem ex quod blanditiis deserunt, ullam mollitia tenetur impedit quibusdam odit possimus praesentium quia iste at laboriosam. Nam, vitae."
                news-date="30/01/2020"
            />
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