<template>
    <div id="p1">
      <pageOne />
      <!-- Begin text definitions (Positioned/styled in CSS) -->
      <div id="t1_1" class="t s1_1">Ch.1 Complex number</div>
      <div id="t2_1" class="t s2_1">○</div>
      <div id="t3_1" class="t s3_1">1</div>
      <div id="t4_1" class="t s4_1">Number system</div>
      <div id="t5_1" class="t s5_1">○</div>
      <div id="t6_1" class="t s6_1">2</div>
      <div id="t7_1" class="t s7_1">Recurring decimal</div>
      <div id="t8_1" class="t s4_1">
        They are numbers with periodic decimal digits.
      </div>
      <div id="t9_1" class="t s8_1">Example:</div>
      <div id="ta_1" class="t s9_1">0.02</div>
      <div id="tb_1" class="t s9_1">̇</div>
      <div id="tc_1" class="t s9_1">018</div>
      <div id="td_1" class="t s9_1">̇</div>
      <div id="te_1" class="t s9_1">= 0.02018201820182018 … …</div>
      <div id="tf_1" class="t sa_1">Note that</div>
      <div id="tg_1" class="t sb_1">Zero is both real</div>
      <div id="th_1" class="t sb_1">and imaginary.</div>
      <div id="ti_1" class="t sc_1">Complex numbers</div>
      <div id="tj_1" class="t sd_1">
        Number that can be expressed in the form
      </div>
      <div id="tk_1" class="t se_1"> + </div>
      <div id="tl_1" class="t s7_1">Imaginary numbers</div>
      <div id="tm_1" class="t sf_1">(e.g.</div>
      <div id="tn_1" class="t sg_1">ξ−</div>
      <div id="to_1" class="t sf_1">)</div>
      <div id="tp_1" class="t s7_1">Real numbers</div>
      <div id="tq_1" class="t sf_1">(e.g.</div>
      <div id="tr_1" class="t sg_1">,</div>
      <div id="ts_1" class="t sg_1">,</div>
      <div id="tt_1" class="t sh_1">π</div>
      <div id="tu_1" class="t sg_1">,</div>
      <div id="tv_1" class="t sg_1">−. </div>
      <div id="tw_1" class="t sf_1">)</div>
      <div id="tx_1" class="t sf_1">Rational numbers</div>
      <div id="ty_1" class="t si_1">(e.g. 10</div>
      <div id="tz_1" class="t sj_1">,</div>
      <div id="t10_1" class="t sj_1">. </div>
      <div id="t11_1" class="t sj_1">̇</div>
      <div id="t12_1" class="t sj_1"></div>
      <div id="t13_1" class="t sj_1">̇</div>
      <div id="t14_1" class="t sj_1">,</div>
      <div id="t15_1" class="t sk_1">−</div>
      <div id="t16_1" class="t sl_1"></div>
      <div id="t17_1" class="t sl_1"></div>
      <div id="t18_1" class="t si_1">)</div>
      <div id="t19_1" class="t sf_1">Irrational numbers</div>
      <div id="t1a_1" class="t si_1">(e.g.</div>
      <div id="t1b_1" class="t sm_1">π</div>
      <div id="t1c_1" class="t sj_1">, ,</div>
      <div id="t1d_1" class="t sj_1">ξ</div>
      <div id="t1e_1" class="t si_1">)</div>
      <div id="t1f_1" class="t sf_1">Integers</div>
      <div id="t1g_1" class="t si_1">(e.g.</div>
      <div id="t1h_1" class="t sj_1">−, −, , , </div>
      <div id="t1i_1" class="t si_1">)</div>
      <div id="t1j_1" class="t sf_1">Whole numbers</div>
      <div id="t1k_1" class="t si_1">(e.g.</div>
      <div id="t1l_1" class="t sj_1">, , , </div>
      <div id="t1m_1" class="t si_1">)</div>
      <div id="t1n_1" class="t sf_1">Natural numbers</div>
      <div id="t1o_1" class="t si_1">(e.g.</div>
      <div id="t1p_1" class="t sj_1">, , </div>
      <div id="t1q_1" class="t si_1">)</div>

  </div>
</template>
<script>
import pageOne from "../notes/maths/1/pageOne.vue";
export default {
    name: "Display",
    props:{

    },
    components:{
      pageOne,
    }
}
</script>
<style scoped>
  #p1 {
    left : 10%;
    overflow: hidden; 
    position: relative; 
    background-color: white; 
    width: 909px; 
    height: 1286px;
  }
  @font-face {
    font-family: Bauhaus93_4;
    src: url("../notes/maths/fonts/Bauhaus93_4.woff") format("woff");
  }

  @font-face {
    font-family: CambriaMath_u;
    src: url("../notes/maths/fonts/CambriaMath_u.woff") format("woff");
  }

  @font-face {
    font-family: CambriaMath_u_1;
    src: url("../notes/maths/fonts/CambriaMath_u_1.woff") format("woff");
  }

  @font-face {
    font-family: SimSun_c;
    src: url("../notes/maths/fonts/SimSun_c.woff") format("woff");
  }

  @font-face {
    font-family: TimesNewRoman-Bold_11;
    src: url("../notes/maths/fonts/TimesNewRoman-Bold_11.woff") format("woff");
  }

  @font-face {
    font-family: sub_TimesNewRoman-Bold_lfb;
    src: url("../notes/maths/fonts/sub_TimesNewRoman-Bold_lfb.woff") format("woff");
  }

  @font-face {
    font-family: sub_TimesNewRoman_lfr;
    src: url("../notes/maths/fonts/sub_TimesNewRoman_lfr.woff") format("woff");
  }
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  #t1_1 {
    left: 110px;
    bottom: 1125px;
    letter-spacing: 0.23px;
    word-spacing: 0.27px;
  }
  #t2_1 {
    left: 110px;
    bottom: 1071px;
  }
  #t3_1 {
    left: 120px;
    bottom: 1079px;
  }
  #t4_1 {
    left: 148px;
    bottom: 1071px;
    letter-spacing: 0.22px;
    word-spacing: 0.04px;
  }
  #t5_1 {
    left: 110px;
    bottom: 257px;
  }
  #t6_1 {
    left: 120px;
    bottom: 265px;
  }
  #t7_1 {
    left: 149px;
    bottom: 257px;
    letter-spacing: 0.21px;
    word-spacing: 0.04px;
  }
  #t8_1 {
    left: 110px;
    bottom: 217px;
    letter-spacing: 0.21px;
    word-spacing: 0.12px;
  }
  #t9_1 {
    left: 165px;
    bottom: 178px;
    letter-spacing: -0.01px;
  }
  #ta_1 {
    left: 165px;
    bottom: 147px;
    letter-spacing: 0.08px;
  }
  #tb_1 {
    left: 205px;
    bottom: 152px;
  }
  #tc_1 {
    left: 209px;
    bottom: 147px;
    letter-spacing: -0.09px;
  }
  #td_1 {
    left: 244px;
    bottom: 152px;
  }
  #te_1 {
    left: 253px;
    bottom: 147px;
    letter-spacing: -0.04px;
    word-spacing: -1.16px;
  }
  #tf_1 {
    left: 611px;
    bottom: 390px;
    letter-spacing: 0.08px;
    word-spacing: 0.18px;
  }
  #tg_1 {
    left: 611px;
    bottom: 363px;
    letter-spacing: 0.11px;
    word-spacing: 0.3px;
  }
  #th_1 {
    left: 611px;
    bottom: 337px;
    letter-spacing: 0.09px;
    word-spacing: 0.58px;
  }
  #ti_1 {
    left: 334px;
    bottom: 1012px;
    letter-spacing: 0.26px;
    word-spacing: 0.35px;
  }
  #tj_1 {
    left: 191px;
    bottom: 969px;
    letter-spacing: -0.03px;
    word-spacing: 0.02px;
  }
  #tk_1 {
    left: 633px;
    bottom: 969px;
    letter-spacing: 1.94px;
    word-spacing: 0.98px;
  }
  #tl_1 {
    left: 493px;
    bottom: 834px;
    letter-spacing: 0.24px;
    word-spacing: 0.38px;
  }
  #tm_1 {
    left: 573px;
    bottom: 789px;
    letter-spacing: -0.17px;
  }
  #tn_1 {
    left: 622px;
    bottom: 788px;
    letter-spacing: -0.28px;
  }
  #to_1 {
    left: 671px;
    bottom: 789px;
  }
  #tp_1 {
    left: 198px;
    bottom: 834px;
    letter-spacing: 0.26px;
    word-spacing: -0.05px;
  }
  #tq_1 {
    left: 173px;
    bottom: 793px;
    letter-spacing: -0.16px;
  }
  #tr_1 {
    left: 223px;
    bottom: 793px;
    letter-spacing: -0.23px;
  }
  #ts_1 {
    left: 278px;
    bottom: 793px;
    letter-spacing: -0.08px;
  }
  #tt_1 {
    left: 302px;
    bottom: 793px;
  }
  #tu_1 {
    left: 315px;
    bottom: 793px;
  }
  #tv_1 {
    left: 327px;
    bottom: 793px;
    letter-spacing: -0.22px;
    word-spacing: -2.36px;
  }
  #tw_1 {
    left: 398px;
    bottom: 793px;
  }
  #tx_1 {
    left: 177px;
    bottom: 655px;
    letter-spacing: -0.28px;
    word-spacing: 0.16px;
  }
  #ty_1 {
    left: 202px;
    bottom: 629px;
    letter-spacing: 0.14px;
    word-spacing: 0.2px;
  }
  #tz_1 {
    left: 258px;
    bottom: 629px;
  }
  #t10_1 {
    left: 266px;
    bottom: 629px;
    letter-spacing: 0.17px;
    word-spacing: -1.45px;
  }
  #t11_1 {
    left: 292px;
    bottom: 633px;
  }
  #t12_1 {
    left: 295px;
    bottom: 629px;
  }
  #t13_1 {
    left: 305px;
    bottom: 633px;
  }
  #t14_1 {
    left: 310px;
    bottom: 629px;
  }
  #t15_1 {
    left: 317px;
    bottom: 642px;
  }
  #t16_1 {
    left: 326px;
    bottom: 642px;
  }
  #t17_1 {
    left: 322px;
    bottom: 622px;
  }
  #t18_1 {
    left: 334px;
    bottom: 629px;
  }
  #t19_1 {
    left: 473px;
    bottom: 654px;
    letter-spacing: -0.26px;
    word-spacing: 0.15px;
  }
  #t1a_1 {
    left: 523px;
    bottom: 629px;
    letter-spacing: 0.18px;
  }
  #t1b_1 {
    left: 561px;
    bottom: 629px;
  }
  #t1c_1 {
    left: 571px;
    bottom: 629px;
    letter-spacing: 0.3px;
    word-spacing: -2.14px;
  }
  #t1d_1 {
    left: 596px;
    bottom: 629px;
    letter-spacing: 0.26px;
  }
  #t1e_1 {
    left: 619px;
    bottom: 629px;
  }
  #t1f_1 {
    left: 211px;
    bottom: 551px;
    letter-spacing: -0.2px;
  }
  #t1g_1 {
    left: 180px;
    bottom: 530px;
    letter-spacing: 0.17px;
  }
  #t1h_1 {
    left: 213px;
    bottom: 530px;
    letter-spacing: 0.11px;
    word-spacing: -1.42px;
  }
  #t1i_1 {
    left: 322px;
    bottom: 530px;
  }
  #t1j_1 {
    left: 171px;
    bottom: 457px;
    letter-spacing: -0.3px;
    word-spacing: 0.16px;
  }
  #t1k_1 {
    left: 198px;
    bottom: 435px;
    letter-spacing: 0.16px;
  }
  #t1l_1 {
    left: 240px;
    bottom: 435px;
    letter-spacing: 0.15px;
    word-spacing: -1.57px;
  }
  #t1m_1 {
    left: 304px;
    bottom: 435px;
  }
  #t1n_1 {
    left: 163px;
    bottom: 364px;
    letter-spacing: -0.28px;
    word-spacing: 0.15px;
  }
  #t1o_1 {
    left: 208px;
    bottom: 341px;
    letter-spacing: 0.18px;
  }
  #t1p_1 {
    left: 245px;
    bottom: 341px;
    letter-spacing: 0.16px;
    word-spacing: -1.63px;
  }
  #t1q_1 {
    left: 292px;
    bottom: 341px;
  }

  .s1_1 {
    font-size: 30px;
    font-family: Bauhaus93_4;
    color: #000;
  }
  .s2_1 {
    font-size: 30px;
    font-family: SimSun_c;
    color: #000;
  }
  .s3_1 {
    font-size: 21px;
    font-family: sub_TimesNewRoman_lfr;
    color: #000;
  }
  .s4_1 {
    font-size: 30px;
    font-family: sub_TimesNewRoman_lfr;
    color: #000;
  }
  .s5_1 {
    font-size: 30px;
    font-family: SimSun_c;
    color: #000;
    -webkit-text-stroke: 0.9px #000;
    /*text-stroke: 0.9px #000;*/
  }
  .s6_1 {
    font-size: 21px;
    font-family: sub_TimesNewRoman-Bold_lfb;
    color: #000;
  }
  .s7_1 {
    font-size: 30px;
    font-family: sub_TimesNewRoman-Bold_lfb;
    color: #000;
  }
  .s8_1 {
    font-size: 23px;
    font-family: sub_TimesNewRoman_lfr;
    color: #767171;
  }
  .s9_1 {
    font-size: 23px;
    font-family: CambriaMath_u;
    color: #767171;
  }
  .sa_1 {
    font-size: 21px;
    font-family: sub_TimesNewRoman_lfr;
    color: #c00000;
  }
  .sb_1 {
    font-size: 21px;
    font-family: sub_TimesNewRoman_lfr;
    color: #212121;
  }
  .sc_1 {
    font-size: 30px;
    font-family: sub_TimesNewRoman-Bold_lfb;
    color: #fff;
  }
  .sd_1 {
    font-size: 26px;
    font-family: sub_TimesNewRoman_lfr;
    color: #fff;
  }
  .se_1 {
    font-size: 26px;
    font-family: CambriaMath_u;
    color: #fff;
  }
  .sf_1 {
    font-size: 25px;
    font-family: sub_TimesNewRoman-Bold_lfb;
    color: #000;
  }
  .sg_1 {
    font-size: 25px;
    font-family: CambriaMath_u;
    color: #000;
  }
  .sh_1 {
    font-size: 25px;
    font-family: TimesNewRoman-Bold_11;
    color: #000;
  }
  .si_1 {
    font-size: 18px;
    font-family: sub_TimesNewRoman-Bold_lfb;
    color: #000;
  }
  .sj_1 {
    font-size: 18px;
    font-family: CambriaMath_u;
    color: #000;
  }
  .sk_1 {
    font-size: 13px;
    font-family: CambriaMath_u_1;
    color: #000;
  }
  .sl_1 {
    font-size: 13px;
    font-family: CambriaMath_u;
    color: #000;
  }
  .sm_1 {
    font-size: 18px;
    font-family: TimesNewRoman-Bold_11;
    color: #000;
  }
</style>