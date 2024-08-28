<template>
        <header>
            <div class="myself">
                <h1 style="font-size: 2.5em; margin-bottom: 0.5em; color: whitesmoke;"><b>Nick 的個人履歷</b></h1>
            <p style="font-size: 1.2em; margin-bottom: 0.2em; color: #555;">Hi, I'm Nick</p>
            <p style="font-size: 1.5em; color: #292cd3;">尋求前端開發 / Python 職位</p>
            </div>

            <nav id="pc-menu">
                <ul>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                
              </nav>
              <!-- 菜單按鈕 -->
              <div class="hamburger-toggle">
                <span class="bar-1"></span>
                <span class="bar-2"></span>
                <span class="bar-3"></span>
            </div>

<!-- 導航菜單 -->

          </header>
          <nav class="navbar-links">
    <ul class="menu-list">
        <li class="menu-item"><a href="#ABOUT" class="menuLINK">About Me</a></li>
        <li class="menu-item"><a href="#SKILLS" class="menuLINK">Skills</a></li>
        <li class="menu-item"><a href="#PORTFOLIO" class="menuLINK">Portfolio</a></li>
        <li class="menu-item"><a href="#CONTACT" class="menuLINK">Contact</a></li>
       
    </ul>
    <div class="contact-info MUfooter">
          <div class="email">
              <span class="pi pi-envelope" style="font-size: 1.5rem; color: #fff;">
               我的信箱
              </span>
              <p>a0999699620@gmail.com</p>
          </div>
          <div class="phone">
            <span class="pi pi-phone" style="font-size: 1.5rem; color: #fff;">與我聯絡</span>
            <p> +886 982-710-334</p>
          </div>
        </div>
        <div class="banner"></div>
</nav>
<section class="about">
  學立
  工作經歷
  自傳
</section>
<section class="skills">
  專長
</section>
<footer>
  email
  line

</footer>
</template>

<script >
import 'primeicons/primeicons.css'
import { toggleNavbar } from '@/assets/js/header.js';

export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  mounted() {
    toggleNavbar(); // 调用外部 JavaScript 函数
  },
}
</script>

<style scoped>
@import '../assets/css/header.css';

</style>