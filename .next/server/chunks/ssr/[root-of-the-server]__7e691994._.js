module.exports=[56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},93898,(a,b,c)=>{"use strict";b.exports=a.r(29331).vendored.contexts.AppRouterContext},93589,(a,b,c)=>{"use strict";b.exports=a.r(29331).vendored.contexts.HooksClientContext},77968,(a,b,c)=>{"use strict";b.exports=a.r(29331).vendored.contexts.ServerInsertedHtml},2455,a=>{"use strict";var b=a.i(30703);function c({text:a,disabled:c=!1,speed:d=5,className:e=""}){let f=`${d}s`;return(0,b.jsx)("div",{className:`shiny-text ${c?"disabled":""} ${e}`,style:{animationDuration:f},children:a})}a.s(["ShinyText",()=>c])},62102,a=>{"use strict";var b=a.i(30703),c=a.i(23155),d=a.i(57726),e=a.i(28941),f=a.i(37263),g=a.i(65133),h=a.i(72652);class i extends h.Geometry{constructor(a,{attributes:b={}}={}){Object.assign(b,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(a,b)}}var j=a.i(8927);function k({hue:a=0,hoverIntensity:d=.2,rotateOnHover:h=!0,forceHoverState:k=!1}){let l=(0,c.useRef)(null),m=`
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `,n=`
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }
    
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.9, 0.9, 0.9);
    const vec3 baseColor2 = vec3(0.7, 0.7, 0.7);
    const vec3 baseColor3 = vec3(0.1, 0.1, 0.1);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;
      
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;
      
      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);
      
      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
      
      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);
      
      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
      
      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;return(0,c.useEffect)(()=>{let b,c=l.current;if(!c)return;let o=new g.Renderer({alpha:!0,premultipliedAlpha:!1}),p=o.gl;p.clearColor(0,0,0,0),c.appendChild(p.canvas);let q=new i(p),r=new f.Program(p,{vertex:m,fragment:n,uniforms:{iTime:{value:0},iResolution:{value:new j.Vec3(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)},hue:{value:a},hover:{value:0},rot:{value:0},hoverIntensity:{value:d}}}),s=new e.Mesh(p,{geometry:q,program:r});function t(){if(!c)return;let a=window.devicePixelRatio||1,b=c.clientWidth,d=c.clientHeight;o.setSize(b*a,d*a),p.canvas.style.width=b+"px",p.canvas.style.height=d+"px",r.uniforms.iResolution.value.set(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)}window.addEventListener("resize",t),t();let u=0,v=0,w=0,x=a=>{let b=c.getBoundingClientRect(),d=a.clientX-b.left,e=a.clientY-b.top,f=b.width,g=b.height,h=Math.min(f,g),i=(d-f/2)/h*2,j=(e-g/2)/h*2;u=+(.8>Math.sqrt(i*i+j*j))},y=()=>{u=0};c.addEventListener("mousemove",x),c.addEventListener("mouseleave",y);let z=c=>{b=requestAnimationFrame(z);let e=(c-v)*.001;v=c,r.uniforms.iTime.value=.001*c,r.uniforms.hue.value=a,r.uniforms.hoverIntensity.value=d;let f=k?1:u;r.uniforms.hover.value+=(f-r.uniforms.hover.value)*.1,h&&f>.5&&(w+=.3*e),r.uniforms.rot.value=w,o.render({scene:s})};return b=requestAnimationFrame(z),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",t),c.removeEventListener("mousemove",x),c.removeEventListener("mouseleave",y),c.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[k,d,a,h]),(0,b.jsx)("div",{ref:l,className:"orb-container"})}var l=a.i(2455),m=a.i(41460),n=a.i(54445);function o(){let a=(0,d.useRouter)(),{session:e}=(0,m.useAuth)(),{isGuestMode:f}=(0,n.useGuestMode)(),[g,h]=(0,c.useState)(!1);return(0,b.jsxs)("div",{className:`landing-container ${g?"fade-out":""}`,children:[(0,b.jsx)("div",{className:"orb-background",children:(0,b.jsx)(k,{hue:220,hoverIntensity:.3,rotateOnHover:!0,forceHoverState:!1})}),(0,b.jsxs)("div",{className:"content",children:[(0,b.jsx)("h1",{children:"Omi AI"}),(0,b.jsx)("p",{children:"Innovating the conversational AI experience"}),(0,b.jsx)("div",{className:"button-container",children:(0,b.jsx)("button",{className:"start-button",onClick:()=>{h(!0),setTimeout(()=>{e||f?a.push("/chat"):a.push("/login")},800)},disabled:g,children:(0,b.jsx)(l.ShinyText,{text:"Start",speed:3,className:"start-button-text"})})})]})]})}a.s(["LandingPage",()=>o],62102)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e691994._.js.map