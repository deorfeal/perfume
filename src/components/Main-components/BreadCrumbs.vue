<template>
    <div class="main__breadcrumbs breadcrumbs">
        <div class="container">
            <div class="breadcrumbs__inner">
                <a class="breadcrumbs__link" href="#">
                    Главная
                </a>
                <p class="breadcrumbs__text">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text', ''],
}
</script>

<style lang="scss">
.breadcrumbs {
    padding-top: 20px;

    &__inner {
        display: flex;
        gap: 55px;
        align-items: center;
    }

    &__link {
        font-size: 16px;
        line-height: 22px;
        color: #A5A5A5;
        position: relative;

        &::after {
            content: '';
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -40px;
            background-repeat: no-repeat;
            background-image: url(public/header/bread-crumbs-arrow.svg);
        }
    }

    &__text {
        font-size: 16px;
        line-height: 22px;
        color: #A5A5A5;
    }
}
</style>