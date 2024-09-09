<template>
  <section>
    <div class="about">
      <img src="../../src/assets/images/my.png" alt="">
      <div class="about-text">
        <h1>關於我</h1>
        <p>我出生於2000年，23歲，家鄉是純樸的嘉義，射手座O型。個性開朗、樂觀、積極向上，喜歡旅遊，因為可以接觸到不同的人事物。目前就讀大學夜間部。 <br>
        <pre>
          前端技能：
          具備三個月的前端工程師經驗
          熟悉切版流程，具有獨立切版的經驗
          使用Bootstrap進行網頁切版
          使用AOS實現網頁滾動動畫
          掌握JavaScript技術，並使用Angular進行開發
          熟悉Git及GitHub，使用版本控制管理專案進度與變更
          </pre>
        <pre>
          Python相關技能：
          熟悉Python程式語言
          Requests爬蟲技術
          Pandas進行資料清洗
          具有從Open Data API取得資料並儲存至資料庫的經驗
          整合資料庫與ChatGPT模型進行應用功能擴充
        </pre>
        <pre>
          MySQL 基礎技能：
          能夠建立資料庫（database）和資料表（table）
          熟悉一些基礎的 SQL 語法（如 SELECT, INSERT, UPDATE, DELETE）
          
        </pre>
        <pre>
          Linux 基礎技能：
          熟悉基本操作和常用指令（如 cd, ls, cp, mv, rm 等）
        </pre>
        使用Vmware和RealVNC連接樹莓派
        其他：
        良好的學習能力及進取心
        熱愛挑戰自己，不斷學習與成長


        </p>
      </div>
    </div>
  </section>
  <div class="skill container-fulid ">
    <div class="skill-title ">
      <h1>個人技能</h1>
      <p>綜合目前所學得出以下技能及使用工具</p>
    </div>

    <div class="row">
      <div class="col-xl-3 mb-5" data-aos="fade-left">
        <h3> <i class="fa-brands fa-html5"></i>
          Html</h3>
        <img src="../assets/images/html.png" alt="Html">
      </div>

      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="300">
        <h3><i class="fa-brands fa-css3-alt"></i> Css</h3>
        <img src="../assets/images/css.png" alt="Css">


      </div>
      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="600">
        <h3><i class="fa-brands fa-js"></i>Javascript</h3><img src="../assets/images/js.png" alt="Js">
      </div>
      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="900">
        <h3><i class="fa-brands fa-git-alt"></i>Git</h3><img src="../assets/images/git.png" alt="Git">
      </div>
      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="1200">
        <h3><i class="fa-brands fa-angular"></i>Angular</h3><img src="../assets/images/angular.png" alt="Angular">
      </div>
      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="1500">
        <h3><i class="fa-solid fa-laptop"></i>Rwd</h3><img src="../assets/images/Rwd.png" alt="Rwd">
      </div>
      <div class="col-xl-3" data-aos="fade-left" data-aos-delay="1800">
        <h3><i class="fa-brands fa-bootstrap"></i>Bootstrap</h3> <img src="../assets/images/bootstrap.png"
          alt="Bootstrap">
      </div>
      <div class="col-xl-3" data-aos="fade-left"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MyMainComponent',
  props: {
    msg: String
  },
}
</script>
<style scoped>
@import '../assets/css/main.css';
</style>