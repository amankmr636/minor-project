import './heybud.css';

const HeyBud=()=>{
return(<>
<div class="container" >

    
    <div class="message left">
        Rohan:Good.You say?
    </div>

    <div class="message right">
        Aman:hey!! how are you?
    </div>
</div>   
<div class="send">
<form action="#" id="send-container">
    <input type="text" name="messageInp" id="messageInp"/>
    <button class="btn" type="submit">Send</button>
</form>
</div>
</>
)

}

export default HeyBud;