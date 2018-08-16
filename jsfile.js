window.onload=function load(){
    var d=document.createElement('div');
    d.style.width='400px';
    d.style.height='100px';
    d.style.cssFloat='left'
    d.style.background='gray';
    d.style.display='none'

    document.body.appendChild(d);

    var btn = document.createElement('input')
    btn.id = 'btn1'
    btn.type = 'button'
    btn.value = 'KNOPKA'
    document.body.appendChild(btn)


    var btn1_1 = document.createElement('input')
    btn1_1.id = 'btn3_1'
    btn1_1.type = 'button'
    btn1_1.value = 'DELETE 3'
    btn1_1.style.display='none'
    d.appendChild(btn1_1)





    btn1_1.onclick=function btn_f_1_1(){
        d.style.display='none'
        btn.style.display='block'
    }




    var btn1_2 = document.createElement('input')
    btn1_2.id = 'btn3_1'
    btn1_2.type = 'button'
    btn1_2.value = 'NEXT 3'
    btn1_2.style.display='none'
    d.appendChild(btn1_2)


    btn1_2.onclick=function btn_f_1_2() {
        // d.appendChild(img2);
        // di.appendChild(img);
        var nk1=document.getElementById('img1')
        var nk2=document.getElementById('img2')

        var x =nk1.src
        var y =nk2.src

        nk2.src=x
        nk1.src=y
    }


    btn.onclick=function bt3() {
        d.style.display='block'
        btn.style.display='none'
        btn1_1.style.display='block'
        btn1_2.style.display='block'


    }

    var img = new Image();
    img.src = '1.jpg'
    img.style.width='100%'
    img.id="img1"
    d.appendChild(img);
//2rd div

    var di=document.createElement('div');
    di.style.width='400px';
    di.style.height='100px';
    di.style.background='gray';
    di.style.cssFloat='left'
    di.style.display='none'
    document.body.appendChild(di);

    var btn2 = document.createElement('input')
    btn2.id = 'btn2'
    btn2.type = 'button'
    btn2.value = 'KNOPKA'
    document.body.appendChild(btn2)

    var btn2_1 = document.createElement('input')
    btn2_1.id = 'btn3_1'
    btn2_1.type = 'button'
    btn2_1.value = 'DELETE 2'
    btn2_1.style.display='none'
    di.appendChild(btn2_1)


    var btn2_2 = document.createElement('input')
    btn2_2.id = 'btn3_1'
    btn2_2.type = 'button'
    btn2_2.value = 'NEXT 2'
    btn2_2.style.display='none'
    di.appendChild(btn2_2)


    btn2_2.onclick=function btn_f_2_2() {
        // di.appendChild(img3);
        // div.appendChild(img2);

        var nk3=document.getElementById('img2')
        var nk4=document.getElementById('img3')

        var z =nk3.src
        var w =nk4.src

        nk4.src=z
        nk3.src=w
    }


    btn2.onclick=function bt3() {
        di.style.display='block'
        btn2.style.display='none'
        btn2_1.style.display='block'
        btn2_2.style.display='block'
    }





    btn2_1.onclick=function btn_f_2_1(){
        di.style.display='none'
        btn2.style.display='block'
    }







    var img2 = new Image();
    img2.src = '2.jpg'
    img2.style.width='100%'
    img2.id="img2"
    di.appendChild(img2);
//3rd div

    var div=document.createElement('div');
    div.style.width='400px';
    div.style.height='100px';
    div.style.background='gray';
    div.style.cssFloat='left'
    div.style.display='none'
    document.body.appendChild(div);

    var btn3 = document.createElement('input')
    btn3.id = 'btn3'
    btn3.type = 'button'
    btn3.value = 'KNOPKA'
    document.body.appendChild(btn3)


    var btn3_1 = document.createElement('input')
    btn3_1.id = 'btn3_1'
    btn3_1.type = 'button'
    btn3_1.value = 'DELETE 3'
    btn3_1.style.display='none'
    div.appendChild(btn3_1)


    var btn3_2 = document.createElement('input')
    btn3_2.id = 'btn3_1'
    btn3_2.type = 'button'
    btn3_2.value = 'NEXT 3'

    btn3_2.style.display='none'
    div.appendChild(btn3_2)

    btn3.onclick=function bt3() {
        div.style.display='block'
        btn3_1.style.display='block'
        btn3_2.style.display='block'
        btn3.style.display='none'

    }






    btn3_1.onclick=function btn_f_3_1(){
        div.style.display='none'
        btn3.style.display='block'
    }


    btn3_2.onclick=function btn_f_3_2() {
        // d.appendChild(img3);
        // div.appendChild(img);

        var nk5=document.getElementById('img2')
        var nk6=document.getElementById('img3')

        var d =nk5.src
        var a =nk6.src

        nk6.src=d
        nk5.src=a
    }




    var img3 = new Image();
    img3.src = '3.jpg'
    img3.style.width='100%'
    img3.id="img3"
    div.appendChild(img3);
}


