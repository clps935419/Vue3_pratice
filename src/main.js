import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './router'
import '@/assets/css/reset.css'
import { numPrice } from '@/lib/tools.js'
const app = createApp(App2)

//自訂義模板
app.directive('focus',{
    mounted(el){
        console.log('el',el)
        el.focus();
    }
});

app.directive('price', {
    mounted(el, val) {
        const p = numPrice(val.value);
        console.log('el', el, p);

        el.innerHTML = p;
    },
    updated(el, val) {
        const p = numPrice(val.value);
        console.log('el', el, p);

        el.innerHTML = p;
    },
});

app.use(router).mount('#app')
