<template>
  <div class="home">
    <canvas id="canvas" width=1940  height=900></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  fillAutoWrapText,
  strokeAutoWrapText,
  fillRoundRect,
  strokeRoundRect,
  fillArrowCircle,
  strokeArrowCircle,
} from 'custom-canvas-api';

@Component
export default class Home extends Vue {
  public mounted() {
    const canvas: any = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff00ff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = 'bold 28px serif';
    ctx.fillText('fillAutoWrapText', 150, 10);
    ctx.fillText('strokeAutoWrapText', 550, 10);
    ctx.fillText('fillRoundRect', 950, 10);
    ctx.fillText('strokeRoundRect', 1350, 10);
    ctx.fillText('fillArrowCircle', 1750, 10);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#fff';
    ctx.textBaseline = 'top';
    const text = '当然啦，除上面的场景文字识别外，历史悠久的手写体的识别到现在还是一件具有挑战的课题，在深度学习的浪潮下，手写体的识别已经前进了一大步，但是尚且没达到印刷体识别那种可以商用的地步，所以啊，OCR的研究还得不断地进行下去。';
    fillAutoWrapText(ctx, text, 0, 80, 300, 50, '20px PingFang-SC-Heavy', 2);
    strokeAutoWrapText(ctx, text, 400, 80, 300, 50, '20px PingFang-SC-Heavy');
    fillRoundRect(ctx, 800, 80, 300, 300);
    strokeRoundRect(ctx, 1200, 80, 300, 300);
    fillArrowCircle(ctx, 1750, 230, 150, 0.05, 40);
  }
}
</script>

<style lang="less">
  .home {
    #canvas{
      background: #000;
    }
  }
</style>