<template>
    <nav>
        <div class="nav_logo">
            <picture>
                <source media="(min-width:1920px)" :srcset="desktopLogo">
                <source media="(min-width:768px)" :srcset="laptopLogo">
                <img :src="mobileLogo" alt="Logo">
            </picture>
        </div>
        <div class="nav_links">
            <div class="nav_link">
                <ul>
                    <li>
                        <router-link to="/" active-class="active"><span>Home</span></router-link>
                    </li>
                    <li>
                        <router-link to="/movies" active-class="active"><span>Movies & Shows</span></router-link>
                    </li>
                    <li>
                        <router-link to="/support" active-class="active"><span>Support</span></router-link>
                    </li>
                    <li>
                        <router-link to="/subscriptions" active-class="active"><span>Subscriptions</span></router-link>
                    </li>
                </ul>

            </div>
        </div>
        <div class="nav_icons">
            <h1>dsv;kd;kc</h1>
        </div>
    </nav>
</template>u

<script>
import desktopLogo from "../assets/desktopLogo.png"
import laptopLogo from "../assets/laptopLogo.png"
import mobileLogo from "../assets/mobileLogo.png"
export default {
    name: 'Navbar',
    data() {
        return {
            desktopLogo,
            laptopLogo,
            mobileLogo,
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
    border: 1px solid red;
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

/* .nav_link ul li span:hover{
    font-weight: 500;
    background-color: #1a1a1a;
    color: #ffffff;
} */
:deep(.active span) {
    font-weight: 500;
    background-color: #1a1a1a;
    color: #ffffff;
}

</style>