<template>
  <div class="about">
    <canvas id="image-canvas" width=1940  height=1200></canvas>
    <img src="../assets/1.jpg" hidden id="img">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  compose,
  reflectionUpDown,
  reflectionLeftRight,
  reverse,
  redColor,
  greenColor,
  blueColor,
  blur,
  curtain,
  gray,
  mosaic,
  blurBackup,
} from 'canvas-image-pixel';

@Component
export default class About extends Vue {
  private arr: any[] = [
    {
      name: [],
      text: '',
    },
    {
      name: [reflectionLeftRight],
      text: 'reflectionLeftRight',
    },
    {
      name: [reverse],
      text: 'reverse',
    },
    {
      name: [reflectionUpDown],
      text: 'reflectionUpDown',
    },
    {
      name: [reflectionUpDown, reflectionLeftRight],
      text: 'reflectionUpDown + reflectionLeftRight',
    },
    {
      name: [gray],
      text: 'gray',
    },
    {
      name: [blueColor],
      text: 'blueColor',
    },
    {
      name: [redColor],
      text: 'redColor',
    },
    {
      name: [greenColor],
      text: 'greenColor',
    },
    {
      name: [curtain],
      text: 'curtain',
    },
    {
      name: [blur],
      text: 'blur',
    },
    {
      name: [mosaic],
      text: 'mosaic',
    },
  ];

  public mounted() {
    const canvas: any = document.getElementById('image-canvas');
    const ctx = canvas.getContext('2d');
    setTimeout(() => {
      const img = document.getElementById('img');
      const width = 550;
      const height = 290;
      const startX = 240;
      const startY = 240;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.font = 'bold 28px serif';
      ctx.fillStyle = '#00ffff';
      ctx.drawImage(img, 0, 0, 480, 221);
      ctx.fillText('origin', 240, startY);
      const imgData = ctx.getImageData(0, 0, 480, 221);
      // all methods
      // this.arr.forEach((item, index) => {
      //   if (index > 0) {
      //     const X = index % 3;
      //     const Y = Math.floor(index / 3);
      //     ctx.putImageData(compose(...item.name)(imgData), X * width, Y * height);
      //     ctx.fillText(item.text, 240 + X * width, startY + Y * height);
      //   }
      // });
      // test
      ctx.fillText('reflectionUpDown', 240, startY + height);
      ctx.putImageData(reflectionUpDown(imgData), 0, height);
      ctx.fillText('reflectionLeftRight', 240 + width, startY);
      ctx.putImageData(reflectionLeftRight(imgData), width, 0);
      ctx.fillText('reflectionUpDown + reflectionLeftRight', 240 + width, startY + height);
      // ctx.putImageData(reflectionUpDown(reflectionLeftRight(imgData)), width, height);
      ctx.putImageData(compose(reflectionLeftRight, curtain(), mosaic())(imgData), width, height);
    }, 50);
  }
}
</script>

<style lang="less">
  .about {
    #image-canvas{
      background: #999;
    }
  }
</style>
