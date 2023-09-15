var btn = document.querySelector('#btn');
var msg = document.querySelector('h5');
var flag = 0;

btn.addEventListener('click',function(){
    if(flag == 0){
        msg.innerHTML = "Friends";
        msg.style.color = "Green";
        btn.innerHTML = "Remove Friend";
        flag++;
    }
    else {
        msg.innerHTML = "Stranger";
        msg.style.color = "Maroon";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
})