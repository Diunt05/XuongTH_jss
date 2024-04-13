function valForm(){
    var ten =document.getElementById('hoTen').value;
      if(ten.trim() =='')
      {
        document.getElementById('err-name').innerHTML = "Vui lòng nhập đầy đủ họ và tên"
        return false
      }else{
        document.getElementById('err-name').innerHTML = ""
      }

      var matKhau = document.getElementById('exampleInputPassword1').value
      if(matKhau.trim() == ""){
        document.getElementById("err-password").innerHTML = "Hãy nhập mật khẩu của bạn"
      }else{
        document.getElementById("err-password").innerHTML=" "
      }

      var nhapLai = document.getElementById('exampleInputPassword2').value;

      if(matKhau === nhapLai){
        document.getElementById('err-repassword').innerHTML=""
      }else{
        document.getElementById('err-repassword').innerHTML="Vui lòng nhập đúng mật khẩu"
        return false
      }
      var email = document.getElementById('email').value;
      if(email.includes('@') && email.includes('.')){
        document.getElementById('err-email').innerHTML=""
      }else{
        document.getElementById('err-email').innerHTML= "Email chưa được định dạng"
        return false
      }
}