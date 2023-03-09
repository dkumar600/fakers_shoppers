let data1,category;
function callvalue(event){
    event.preventDefault();
    category=document.getElementById("category").value;
    console.log(category);
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(function(data){data1=data; catogorySelector(data1)})
}

function catogorySelector(data){
    let html;
    const count =data.length;
    console.log(count);
    console.log(data);
    for(let i=0;i<count;i++){
        document.getElementById("data").appendChild(blockCreator(data,i));
    }
}
/* Manual 
function blockCreator(data,i){
    let html='<div class="container"><span><img src="'+data[i].image+'" alt="" height="100px" width="100px"></span>';
    html+='<span style="overflow:hidden;">'+data[i].title+'</span><span>$ '+data[i].price+' <s>$ '+(data[i].price+20.01)+'</s></span>';
    let span='';
    if(data[i].rating.rate!=undefined){
        const r=Math.round(data[i].rating.rate);
        let m=1;
        while(m<=r){
            span+='<span class="fa fa-star checked"></span>';
            m++;
        }
        console.log(m);
        if(m!=6){
            while(m<=5){
                m++;
                span+='<span class="fa fa-star"></span>';
                console.log(m);
            }
        }
    }
    html+='<span>'+span+'</span></div>';
    return html;
}
*/
function blockCreator(data,i){;
    let text1=document.createElement("div");
    text1.classList.add("container");
    let text2=document.createElement("span");
    let text3=document.createElement("img");
    text3.src=data1[i].image;
    text2.appendChild(text3);
    text1.append(text2);
    text2=document.createElement("span");
    text2.style="overflow:hidden;";
    text2.innerText=data[i].title;
    text1.appendChild(text2);
    text2=document.createElement("span");
    text2.innerHTML='$ '+data[i].price+' <s>$ '+(data[i].price+20.01)+'</s>';
    text1.appendChild(text2);
    text2=document.createElement("span");
    if(data[i].rating.rate!=undefined){
        const r=Math.round(data[i].rating.rate);
        let m=1;
        while(m<=r){
            text3=document.createElement("span");
            text3.classList.add("fa");
            text3.classList.add("fa-star");
            text3.classList.add("checked");
            text2.appendChild(text3);
            m++;
        }
        console.log(m);
        if(m!=6){
            while(m<=5){
                m++;
                text3=document.createElement("span");
                text3.classList.add("fa");
                text3.classList.add("fa-star");
                text2.appendChild(text3)
                console.log(m);
            }
        }
    }
    text1.appendChild(text2)
    return text1;
}