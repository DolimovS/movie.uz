<template>
    <footer class="">
        <div class="footer ">
            <div class="footer_top">
                <ul>
                    <li>Home</li>
                    <li><a href="#">Categoriya</a></li>
                    <li><a href="#">Devices</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <ul>
                    <li>Movies</li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">New Release</a></li>
                    <li><a href="#">Popular</a></li>
                </ul>
                <ul>
                    <li>Shows</li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">New Release</a></li>
                    <li><a href="#">Popular</a></li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul>
                    <li>Subscription</li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Features</a></li>
                </ul>
                <ul>
                    <li>Connect With Us</li>
                    <li class="messages">
                        <button>
                            <a href="#">
                                <Icon class="footer_icon" name="facebook" />
                            </a>
                        </button>
                        <button>
                            <a href="#">
                                <Icon class="footer_icon" name="twitter" />
                            </a>
                        </button>
                        <button>
                            <a href="#">
                                <Icon class="footer_icon" name="linkendIn" />
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="footer_bottom">
                <a href="#">@2023 streamvib, All Rights Reserved</a>
                <div class="footer_link">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Icon from './Template/Icon.vue';
export default {
    components: {
        Icon
    },
}
</script>

<style>
.footer {
    background-color: rgba(15, 15, 15, 1);
    /* max-width: 1920px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 40px 162px 50px 162px;
}

.footer_top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.footer button {
    border: none;
    background-color: transparent;
}

.footer ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: Manrope;
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
}

.footer ul li {
    padding: 0 20px 0 0;
}

.footer ul li:nth-child(1) {
    margin-top: 60px;
    padding-bottom: 24px;
    font-family: Manrope;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
}

.footer .messages {
    display: flex;
    gap: 14px;
}

.footer .messages .footer_icon {
    padding: 16px;
    border: 1px solid rgba(38, 38, 38, 1);
    border-radius: 8px;
}


.footer_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer_bottom a {
    font-family: Manrope;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
}

.footer_link {
    display: flex;
    gap: 40px;
}

/* media */

@media (max-width:1440px) {
    .footer {
        gap: 80px;
        padding: 40px 80px 40px 80px;
    }

    .footer ul {
        gap: 10px;
        font-size: 16px;
    }

    .footer ul li:nth-child(1) {
        padding-bottom: 20px;
        font-size: 18px;
        margin-top: 40px;
    }

    .messages {
        gap: 10px;
    }

    .messages .footer_icon {
        padding: 10px;
    }

    .footer_bottom a {
        font-size: 14px;
    }

    .footer_link {
        gap: 32px;
    }
}

@media (max-width: 900px) {
    .footer_top {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 750px) {
    .footer {
        gap: 50px;
        padding: 0 0 0 40px;
    }

    .footer_top {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer_bottom {
        flex-direction: column;
        gap: 10px;
        text-align: start;
    }
}

@media (max-width: 400px) {
    .footer {
        gap: 50px;
        padding: 0 16px;
    }

    .footer ul {
        gap: 8px;
        font-size: 14px;

    }

    .footer ul li:nth-child(1) {
        margin-top: 30px;
        padding-bottom: 16px;
        font-size: 16px;
    }

    .messages {
        gap: 10px;
    }

    .messages .footer_icon {
        padding: 10px;
    }

    .footer_bottom {
        align-items: start;
    }

    .footer_bottom a {
        font-size: 14px;
    }
}
</style>