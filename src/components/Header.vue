<template>
  <header>
    <nav id="pc-menu" class="menu">
      <div class="left">
        <div id="logo">
          <img src="../assets/images/image.png" alt="">
        </div>
        <div class="links">
          <a href="#">首頁</a>
          <a href="#">關於我</a>
          <a href="#">個人技能</a>
          <a href="#">工作經歷</a>
          <a href="#">關於作品</a>
        </div>
      </div>
      <div class="button">
        <a href="#"><font-awesome-icon :icon="['fas', 'house']" /></a>
        <a href="#"><font-awesome-icon :icon="['fas', 'phone']" /></a>
        <a href="#"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div>
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

</template>

<script>
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