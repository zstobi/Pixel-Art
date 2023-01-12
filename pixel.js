const main = document.querySelector('.dibujo');
const height = document.querySelector('.h2');
const width = document.querySelector('.w2');
const colorPicker = document.querySelector('.ic');
const resetGrid = document.querySelector('.resetgrid');
let pintar = false;
let list = [a2,a4,a6,a8,a10,a12,a14,a16,a18,a20,a22,a24];
// const fragmento = new DocumentFragment();

const confirmar = document.querySelector('.confirm');
let a = height.value;
let b = width.value;

function grillado(a,b){
    if (a<=90||b<=165){
        main.style.setProperty('--alto',a);
        main.style.setProperty('--ancho',b);

        for (let i=0; i < a * b; i++){
            const div = document.createElement('div');
            div.classList.add('pixel');
            main.appendChild(div);

            list.forEach((x) =>{
                x.addEventListener('click',()=>{
                    div.addEventListener('mouseover',()=>{
                        if (pintar) div.style.backgroundColor = x.style.backgroundColor;
                    });
                    div.addEventListener('mousedown',()=>{
                        div.style.backgroundColor = x.style.backgroundColor;
                    });
                });
            });
    
            const goma = document.querySelector('.transparent');
            goma.addEventListener('click',()=>{
                div.addEventListener('mouseover',()=>{
                    if (pintar) div.style.backgroundColor = '#201f1e';
                });
                div.addEventListener('mousedown',()=>{
                    div.style.backgroundColor = '#201f1e';
                });
            });
        };
    };
};

const nogrid = document.querySelector('.nogrid');
nogrid.addEventListener('click',()=>{
    if (nogrid.textContent == 'no grid'){
        nogrid.textContent = 'grid';
        main.style.gap = '0';
    } else {
        nogrid.textContent = 'no grid';
        main.style.gap = '1px';
    };
});

function clean(){
    let gridClean = confirm('the Grid will be unpainted, do you want to continue?');
    if (gridClean){
        main.innerHTML = '';
        grillado(height.value,width.value);
    };
};

resetGrid.addEventListener('click',clean);

function reset(){
    let reload = confirm('Both Color Palette and the Grid will be reset, do you want to continue?');
    if (reload) location.reload();
};

window.addEventListener('mousedown',()=>{
    pintar = true;
});
window.addEventListener('mouseup',()=>{
    pintar = false;
});

a1.addEventListener('mouseover',()=>{
    a2.style.backgroundColor = a1.value;
});
a3.addEventListener('mouseover',()=>{
    a4.style.backgroundColor = a3.value;
});
a5.addEventListener('mouseover',()=>{
    a6.style.backgroundColor = a5.value;
});
a7.addEventListener('mouseover',()=>{
    a8.style.backgroundColor = a7.value;
});
a9.addEventListener('mouseover',()=>{
    a10.style.backgroundColor = a9.value;
});
a11.addEventListener('mouseover',()=>{
    a12.style.backgroundColor = a11.value;
});
a13.addEventListener('mouseover',()=>{
    a14.style.backgroundColor = a13.value;
});
a15.addEventListener('mouseover',()=>{
    a16.style.backgroundColor = a15.value;
});
a17.addEventListener('mouseover',()=>{
    a18.style.backgroundColor = a17.value;
});
a19.addEventListener('mouseover',()=>{
    a20.style.backgroundColor = a19.value;
});
a21.addEventListener('mouseover',()=>{
    a22.style.backgroundColor = a21.value;
});
a23.addEventListener('mouseover',()=>{
    a24.style.backgroundColor = a23.value;
});

// SACAR EL FOR DENTRO DEL FOR, MUY MAL RENDIMIENTO

// REVISAR EL DOCUMENT FRAGMENT