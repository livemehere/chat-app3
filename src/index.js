let socket = io();

const form = document.querySelector('#form');
const my_name = document.querySelector('#user_name');
const text = document.querySelector('.text');
const messages = document.querySelector('.messages');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const param = {
        user_name:my_name.value,
        text:text.value
    }
    if(text.value){
        socket.emit('chatting',param);
        text.value='';  
    }

})

socket.on('chatting',(data)=>{
    const {user_name,text} = data;
    console.log(data);
    let item = document.createElement('li');
    item.classList.add(my_name.value === user_name ? 'self':'another' );
    
    item.innerHTML=`<span class="name">${user_name}</span><span> : </span>${text}`;
    messages.appendChild(item);

    messages.scrollTop = messages.scrollHeight;
})