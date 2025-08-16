<template>
    <nav>
        <div class="nav_logo">
            <picture>
                <source media="(min-width:1920px)" :srcset="desktopLogo">
                <source media="(min-width:768px)" :srcset="laptopLogo">
                <img :src="mobileLogo" alt="Logo">
            </picture>
        </div>
        <div class="nav_links" >
            <Icon class="nav_icon_bars" @click="toggleMenyu" name="nav_bars" />
            <div @click.self="toggleMenyu" class="nav_link" :class="{ open: isOpen }">
                <ul class="nav_list">
                    <li v-for="link in links" :key="link.to">
                        <router-link :to="link.to" active-class="active"><span>{{ link.label }}</span></router-link>
                    </li>
                </ul>

            </div>
        </div>
        <div class="nav_icons">
            <Icon class="nav_icon_search" width="34" height="34" name="search" />
            <Icon class="nav_icon_search" width="34" height="34" name="message" />
        </div>
    </nav>
</template>
<script>
import desktopLogo from "../assets/desktopLogo.png"
import laptopLogo from "../assets/laptopLogo.png"
import mobileLogo from "../assets/mobileLogo.png"
import Icon from "./Template/Icon.vue"
export default {
    name: 'Navbar',
    components: {
        Icon,
    },
    data() {
        return {
            desktopLogo,
            laptopLogo,
            mobileLogo,
            isOpen: false,
            links: [
                { to: "/", label: "Home" },
                { to: "/movies", label: "Movies & Shows" },
                { to: "/support", label: "Support" },
                { to: "/subscriptions", label: "Subscriptions" },
            ],
        }
    },
    methods: {
        toggleMenyu() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    width: 100%;
    padding: 23px 162px;

}
.nav_link ul {
    display: flex;
    align-items: center;
    gap: 30px;
    background-color: #0f0f0f;
    border-radius: 12px;
    padding: 20px;
    border: 4px solid #1F1F1F;
}
.nav_link ul li span {
    padding: 14px 24px;
    border-radius: 8px;
    font-family: Manrope;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    background-color: transparent;
    color: #bfbfbf;
    border-radius: 8px;
}
:deep(.active span) {
    font-weight: 500;
    background-color: #1a1a1a;
    color: #ffffff;
}
.nav_link ul li span:hover {
    font-weight: 500;
    background-color: #292828;
    color: #ffffff;
}
.nav_icons {
    display: flex;
    align-items: center;
    gap: 30px;
}
.nav_icon_search {
    cursor: pointer;
}
.nav_icon_bars {
    display: none;
}

@media (max-width: 1440px) {
    nav {
        padding: 19px 80px;
    }
    .nav_link ul {
        gap: 16px;
        padding: 16px;
        border: 4px solid #1F1F1F;
    }
    .nav_link ul li span {
        padding: 12px 20px;
        font-size: 14px;
    }
    .nav_link ul li span:hover {
        font-weight: 500;
        background-color: #1a1a1a;
        color: #ffffff;
    }
    .nav_icons {
        gap: 14px;
    }
}

@media (max-width: 768px) {
    nav {
        padding: 40px 16px;
        /* border: 1px solid red; */
    }
    .nav_icons {
        display: none;
    }
    .nav_icon_bars {
        display: block;
    }
    .nav_link {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.575);
        transition: 0.3s all;
        z-index: 99;
        display: none;
    }
    .nav_link.open {
     display: block;  
    }
    .nav_list {
        position: absolute;
        background-color: #fff;
        top: 90px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .nav_link li {
        width: 100%;
        padding: 12px 5px;
        line-height: 100%;
        border-radius: 10px;
        font-size: 20px;
    }
}
</style>