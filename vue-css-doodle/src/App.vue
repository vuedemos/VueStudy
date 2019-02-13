<template>
  <div id="app">
    <div class="demo">
      <css-doodle>
        :doodle {
          @grid: 20 / 100vmax;
          background: 	#5fa6bf;
        }
        @even {
          :after {
          color: 	#fff3e6;
          content: '\@hex(@rand(9500, 9700))';
          font-size: 5vmax;
          transform: scale(@rand(.2, 1.5));
          }
        }
        
        @odd {
          :after {
          color: 	#ffb37f;
          content: '\@hex(@rand(9500, 9700))';
          font-size: 5vmax;
          transform: scale(@rand(.2, 1.5));
          }
        }
      </css-doodle>
    </div>
    <div class="demo">
      <css-doodle id="un">
        :doodle { 
          @grid:10/ 100vmax; 
          perspective: .2em;
          <!-- @shape:circle; -->
          transition:1s cubic-bezier(.175, .885, .32, 1.275)
        }
      
        --num: calc(@abs(
            @abs(@index() -32)
          + @abs(@col(4) - 5) + 180) / 20
        );
      
        --delay: calc(@rand(@row() / @col() * @rand(@row()/@row())) *  -@rand(2.2s));
      
        background:hsla(calc(36 * 3 * @index() * @col())), @rand(80%), @rand(60%),@rand(.6) );
        margin: 1.5vmin;
        mix-blend-mode:overlay;
        animation: r 14s cubic-bezier(.1,@rand(2.33),.01,-10.43) var(--delay) infinite  reverse;
        
        @keyframes r { 
          60% {background: hsla(calc(905 * @col()*9.6), @rand(60%), @rand(60%),calc(@rand(var(--num) / 9))); 
          mix-blend-mode:multiply;
          margin: @rand(1.9vmin);
          transform:rotate(@rand(720deg));} 
        } 
        
        @even {
          @shape:clover, 4;
          transform: scale(@rand(.7)) rotate(-60deg);
          mix-blend-mode:color; 
        }
        
        @odd {
          @shape:clover, 5;
          transform: scale(@rand(.32)) rotate(@rand(400deg));
          mix-blend-mode:color;
        }
      </css-doodle>
    </div>
    <div class="demo">
      <css-doodle>
        :doodle { 
          @grid: 1x10 / 50vmin; 
        }

        @place-cell: center; 
        @size: calc(@index() * 10%);
        
        border-radius: 50%;
        border-style: dashed;
        border-width: calc(@index() * 1vmin); 
        border-color: hsla(
          calc(20 * @index()), 70%, 68%, 
          calc(3 / @index() * .8)
        );
        
        --d: @rand(20s, 40s); 
        --rf: @rand(360deg);
        --rt: calc(var(--rf) + @pick(1turn, -1turn));

        animation: spin var(--d) linear infinite;
        @keyframes spin {
          from { transform: rotate(var(--rf)) }
          to   { transform: rotate(var(--rt)) }
        }

        justify-self: center;
        align-items: center;
        
      </css-doodle> 
    </div>
    <div class="demo">
      <css-doodle>
        :doodle {
          @grid: 10 / 100%; 
        }

        background: @pick(
          #F38181, #FCE38A, #EAFFD0, #95E1D3
        );

        transform: translate(
          @rand(-50vw, 50vw),
          @rand(-50vh, 50vh)
        );

        @size: 5vmin;
        @shape: circle;
        @place-cell: 50% 50%;

        animation-name: explosion;
        animation-iteration-count: infinite;
        animation-direction: reverse;
        animation-duration: calc(@rand(2s, 5s, .1));
        animation-delay: calc(@rand(-5s, -1s, .1));
        animation-timing-function: 
          cubic-bezier(.84, .02, 1, 1);

        @keyframes explosion {
          0% { opacity: 0; }
          70% { opacity: 1; }
          100% { transform: translate(0, 0); }
        }
      </css-doodle>
    </div>
    <div class="demo">
      <css-doodle>
        :doodle {
          @grid: 9 / 61.8vmin; 
          @shape: circle;
        }

        will-change: transform;
        transition: .4s @rand(600ms);
        transform: rotate(@rand(360deg));
        @shape: triangle;

        --n: calc(
            @abs(@abs(@row() - 5)
          + @abs(@col() - 5) - 9) / 9 
        );

        background: hsla(
          calc(var(--n) * 360 + 120),
          60%, 68%, var(--n)
        );
      </css-doodle>
    </div>
    <div class="demo">
      <css-doodle>
        :doodle { 
          @grid: 10 / 100vmax; 
          perspective: 35em;
        }
        
        --s: calc(@row() + @col() - 2);
        --delay: calc(var(--s) * -.1s); 
        
        background: hsl(calc(36 * var(--s)), 35%, 65%);
        animation: r 1s ease-in-out var(--delay) infinite;
        margin: .4vmin;
        
        @keyframes r { 
          to { transform: rotate3d(1, -1, 0, -.5turn) } 
        } 
        :after {
          content: '@pick(万, 能, 淘, 宝)';
          color: @pick(#f36, #98f);
          font-size: 2rem;
        }
      </css-doodle>
    </div>
    <div class="demo">
    <css-doodle grid="8">
  
      :doodle {
        size: 88vmin;
        clip-path: @shape(bud, 5);
        background: #673AB7;
      }

      clip-path: @shape(bud, 5);
      
      background: hsla(
        calc(300 + 3 * @index()), 75%, 70%, @rand(.8) 
      );

      transition: .2s ease @rand(300ms);
      transform:
        scale(@rand(.2, 1.5))
        translate3d(
          @rand(-50%, 50%),
          @rand(-50%, 50%),
          0
        );
    
    </css-doodle>

    <css-doodle grid="8">
  
      :doodle {
        size: 80vmin;
        min-size: 300px;
        clip-path: @shape(pear);
        transform: rotate(90deg);
        filter: drop-shadow(0 0 10px red);
        background: rgba(255, 0, 0, .01);
      }

      background: rgba(255, 0, 0, @rand(.6));
      clip-path: @shape(heart);

      transform:
        translate(
          @rand(-50%, 50%),
          @rand(-50%, 50%)
        )
        rotate(-90deg)
        scale(@rand(.2, 1.5));
    
    </css-doodle>
    </div>
    <div class="demo">
      <css-doodle grid="7">
  
        :doodle {
          size: 100vmax;
          min-size: 600px; 
          background: #2a2e31;
        }
        
        border-radius: 24%;
        border: 1px solid hsla(
          calc(180 + 5 * @index()), 80%, 80%, .7
        );
        
        transition: .2s ease @rand(500ms);
        transform: 
          rotate(@pick(60deg, -60deg)) 
          scale(1.2);
        
      </css-doodle>

    </div>
    <div class="demo">
      <css-doodle>
        :doodle {
          @grid: 20 / 100vmax;
          background: #12152f;
        }
        :after {
          content: '\@hex(@rand(0x2500, 0x257f))';
          font-size: 5vmax; 
          color: hsla(
            @rand(360), 70%, 70%, @rand(.9)
          );
        }
      </css-doodle>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import CSSDoodle from 'css-doodle'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
.demo {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0c27;
}
</style>
