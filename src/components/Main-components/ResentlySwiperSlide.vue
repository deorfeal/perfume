<template>
    <a class="resently-swiper-slide__box resently-swiper-slide-box" href="#">
        <div class="resently-swiper-slide-box__img">
            <img class="resently-swiper-slide-box__img-image" src="../../../public/Resently/resently-img-1.png" alt="#">
        </div>
        <p class="resently-swiper-slide-box__text">
            Cloud Ariana Grande
        </p>
    </a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.resently-swiper-slide-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 25px;
    &__img {
        width: 120px;
        height: 130px;
    }

    &__img-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &__text {
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        text-align: center;
        max-width: 160px;
    }
}
</style>