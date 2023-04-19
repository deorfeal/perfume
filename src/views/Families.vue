<template>
    <div class="big-wrapper">
        <Header />
        <div class="wrapper">
            <main class="main">
                <BreadCrumbsVue :text="BreadCrumbsLink"/>
                <section class="main__kinds kinds">
                    <div class="container">
                        <h1 class="kinds__title">
                            Семейства
                        </h1>
                        <p class="kinds__text">
                            <a href="#">
                                3500
                            </a>
                            <span>
                                семейств
                            </span>
                        </p>
                        <p class="kinds__subtext">
                            Ознакомьтесь с нашим обширным каталогом ароматов. Мы предлагаем большой выбор для разного
                            настроения и событий, от свежих и легких до более насыщенных и теплых. Каталог постоянно
                            обновляется и дополнятся участниками сообщества.
                        </p>
                        <div class="kinds__bottom kinds-bottom">
                            <div class="kinds-bottom__top kinds-bottom-top">
                                <p class="kinds-bottom-top__text">
                                    Лучшие предложения от наших партнеров
                                    <span>
                                        5
                                    </span>
                                </p>
                                <div class="kinds-bottom-top__box kinds-bottom-top-box">
                                    <div class="kinds-bottom-top-box__row">
                                        <p class="kinds-bottom-top-box__row-text">
                                            Показать
                                        </p>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 11L12 15L16 11" stroke="#007F5F" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main__all-kinds all-kinds">
                    <div class="container">
                        <h2 class="all-kinds__title">
                            Все семейства
                        </h2>
                        <div class="all-kinds__inner">
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-1.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Цветочные
                                </p>
                                <p class="all-kinds-item__count">
                                    60 000
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-2.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Древесные
                                </p>
                                <p class="all-kinds-item__count">
                                    29 374
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-3.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Восточные
                                </p>
                                <p class="all-kinds-item__count">
                                    25 091
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-4.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Фруктовые
                                </p>
                                <p class="all-kinds-item__count">
                                    22 430
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-5.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Фужерные
                                </p>
                                <p class="all-kinds-item__count">
                                    13 309
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-6.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Пряные
                                </p>
                                <p class="all-kinds-item__count">
                                    12 000
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-7.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Цитрусовые
                                </p>
                                <p class="all-kinds-item__count">
                                    10 991
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-8.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Ароматические
                                </p>
                                <p class="all-kinds-item__count">
                                    9 053
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-9.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Гурманские
                                </p>
                                <p class="all-kinds-item__count">
                                    5 953
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-10.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Мускусные
                                </p>
                                <p class="all-kinds-item__count">
                                    5 575
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-11.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Зеленые
                                </p>
                                <p class="all-kinds-item__count">
                                    5 320
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-12.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Шипровые
                                </p>
                                <p class="all-kinds-item__count">
                                    4 091
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-13.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Сладкие
                                </p>
                                <p class="all-kinds-item__count">
                                    3 964
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-14.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Кожанные
                                </p>
                                <p class="all-kinds-item__count">
                                    2 958
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-15.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Акватические
                                </p>
                                <p class="all-kinds-item__count">
                                    2 603
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-16.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Бальзамические
                                </p>
                                <p class="all-kinds-item__count">
                                    1 500
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-17.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Амбровые
                                </p>
                                <p class="all-kinds-item__count">
                                    1 302
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-18.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Пудровые
                                </p>
                                <p class="all-kinds-item__count">
                                    1 003
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-19.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Альлегидные
                                </p>
                                <p class="all-kinds-item__count">
                                    505
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-20.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Морские
                                </p>
                                <p class="all-kinds-item__count">
                                    432
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-21.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Минеральные
                                </p>
                                <p class="all-kinds-item__count">
                                    201
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-22.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Животные
                                </p>
                                <p class="all-kinds-item__count">
                                    80
                                </p>
                            </a>
                            <a class="all-kinds__item all-kinds-item" href="#">
                                <div class="all-kinds-item__img">
                                    <img class="all-kinds-item__img-image" src="../../public/Families/all-cinds-img-23.png"
                                        alt="img">
                                </div>
                                <p class="all-kinds-item__text">
                                    Хвойные
                                </p>
                                <p class="all-kinds-item__count">
                                    70
                                </p>
                            </a>
                        </div>
                        <button class="all-kinds__button" type="button">
                            <span>
                                Показать больше
                            </span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11L12 15L16 11" stroke="#007F5F" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </section>
                <section class="main__popular-topics popular-topics">
                    <div class="container">
                        <div class="popular-topics__top">
                            <h2 class="popular-topics__top-title">
                                Популярные темы
                            </h2>
                            <button class="popular-topics__top-btn" type="button" @click="showMorePopular">
                                <span>Показать все</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8.5V16.5" stroke="#007F5F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M8 12.5H16" stroke="#007F5F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>Показать меньше</span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12.5H16" stroke="#007F5F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="popular-topics__wrapper">
                            <div class="popular-topics__inner">
                                <a class="popular-topics__link" href="#">
                                    Нишевая парфюмерия
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Парфюмерия люкс
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Обзоры
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Новинки
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Kenzo
                                </a>
                                <a class="popular-topics__link" href="#">
                                    События
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Аромат
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Натуральный
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Роза
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Косметика
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Цветочные ароматы
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Вопрос-ответ
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Интервью
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Dior
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Парфюмер
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Зима
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Романтичный
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Производство
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Guerlain
                                </a>
                            </div>
                            <div class="popular-topics__inner popular-topics__inner--all">
                                <a class="popular-topics__link" href="#">
                                    Нишевая парфюмерия
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Парфюмерия люкс
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Обзоры
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Новинки
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Kenzo
                                </a>
                                <a class="popular-topics__link" href="#">
                                    События
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Аромат
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Натуральный
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Роза
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Косметика
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Цветочные ароматы
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Вопрос-ответ
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Интервью
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Dior
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Парфюмер
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Зима
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Романтичный
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Производство
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Guerlain
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Интервью
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Dior
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Парфюмер
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Зима
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Весна
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Романтичный
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Производство
                                </a>
                                <a class="popular-topics__link" href="#">
                                    Guerlain
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main__resently resently">
                    <div class="container">
                        <div class="resently__inner">
                            <h2 class="resently__title">
                                Недавно просмотренные ароматы
                            </h2>
                            <swiper class="resently__swiper resently-swiper" :modules="modules"
                                :slides-per-view="5" :space-between="20" navigation @swiper="onSwiper"
                                @slideChange="onSlideChange"
                                :breakpoints="{ 301: { slidesPerView: 1 }, 901: { slidesPerView: 5 } }">
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                                <swiper-slide class="resently-swiper__slide resently-swiper-slide">
                                    <ResentlySwiperSlide />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Main-components/Header.vue';
import BreadCrumbsVue from '../components/Main-components/BreadCrumbs.vue';
import Footer from '../components/Main-components/Footer.vue';
import ResentlySwiperSlide from '../components/Main-components/ResentlySwiperSlide.vue';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Header,
        BreadCrumbsVue,
        Footer,
        Swiper,
        SwiperSlide,
        ResentlySwiperSlide
    },
    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },
    data() {
        return {
            BreadCrumbsLink: 'Семейства'
        }
    },
    methods: {
        showMorePopular() {
            if ( document.querySelector('.popular-topics').classList.contains('popular-topics--more') ) {
                document.querySelector('.popular-topics').classList.remove('popular-topics--more')
            } else {
                document.querySelector('.popular-topics').classList.add('popular-topics--more')
            }
        }
    }
}
</script>

<style lang="scss">
.kinds {
    padding-top: 30px;
    margin-bottom: 50px;

    &__title {
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        font-family: "Rubik", sans-serif;
        color: #000000;
        margin-bottom: 30px;
    }

    &__text {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        font-family: "Rubik", sans-serif;
        color: #000000;

        a {
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            color: #2E3192;
        }

        margin-bottom: 10px;
    }

    &__subtext {
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-bottom: 30px;
    }
}

.kinds-bottom {}

.kinds-bottom-top {
    border: 1px solid #EBEBEB;
    border-radius: 16px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__text {
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 22px;
        line-height: 26px;
        color: #000000;

        span {
            font-family: "Rubik", sans-serif;
            background: #2E3192;
            border-radius: 30px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            width: 32px;
            height: 23px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
        }
    }
}

.kinds-bottom-top-box {

    &__row {
        display: flex;
        align-items: center;
        padding: 12px 18px;
        border: 2px solid #007F5F;
        border-radius: 8px;
        cursor: pointer;
    }

    &__row-text {
        font-size: 18px;
        line-height: 25px;
        color: #007F5F;
    }
}

.all-kinds {
    margin-bottom: 80px;

    &__title {
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #000000;
        font-family: "Rubik", sans-serif;
        margin-bottom: 30px;
    }

    &__inner {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px 20px;
    }

    &__button {
        display: none;
    }
}

.all-kinds-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 20px;
    border: 1px solid #EBEBEB;
    border-radius: 8px;

    &__img {
        width: 50px;
        height: 50px;
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
        margin-right: auto;
    }

    &__count {
        font-size: 16px;
        line-height: 22px;
        color: #C3C3C3;
    }
}

.popular-topics {
    margin-bottom: 80px;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &__top-title {
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #000000;
        font-family: "Rubik", sans-serif;
    }

    &__top-btn {
        display: flex;
        justify-content: center;
        font-size: 18px;
        line-height: 25px;
        color: #007F5F;
        align-items: center;

        svg:last-child {
            display: none;
        }

        span:nth-child(3) {
            display: none;
        }
    }

    &__wrapper {}

    &__inner {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    &__link {
        background: #F2F2F2;
        padding: 8px 15px;
        border-radius: 50px;
        display: block;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }

    &__inner--all {
        display: none;
    }
}

.popular-topics--more {
    .popular-topics__inner {
        display: none;
    }
    .popular-topics__inner--all {
        display: flex;
    }
    .popular-topics__top-btn {
        span:nth-child(1) {
            display: none;
        }
        svg:nth-child(2) {
            display: none;
        }
        span:nth-child(3) {
            display: block;
        }
        svg:nth-child(4) {
            display: block;
        }
    }
}

.resently {
    margin-bottom: 150px;
    &__inner {
        border: 1px solid #E1E1E1;
        border-radius: 16px;
        padding: 45px 30px 30px 30px;
        position: relative;
    }

    &__title {
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        background: #fff;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #000000;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 550px;
    }
}

.resently-swiper {
    width: 100%;
    max-width: 100%;
    position: unset;
    .swiper-wrapper {
        width: 100%;
    }
    .swiper-button-prev {
        position: absolute;
        top: 55%;
        background: #fff;
        left: -12px;
        height: 100px;
        width: 24px;
        transform: translateY(-50%);
        &::before {
            content: '';
            background-image: url(../../public/Resently/resently-arrow.svg);
            position: absolute;
            top: 50%;
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(180deg);
            background-size: contain;
        }
    }
    .swiper-button-next {
        position: absolute;
        top: 55%;
        background: #fff;
        right: -12px;
        height: 100px;
        width: 24px;
        transform: translateY(-50%);
        &::before {
            content: '';
            background-image: url(../../public/Resently/resently-arrow.svg);
            position: absolute;
            top: 50%;
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }
    .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
        content: unset;
    }
    .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
        content: unset;
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
        opacity: 1 !important;
        &::before {
            opacity: 0.3;
        }
    }
}
</style>