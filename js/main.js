function validate_form ( )
{
	valid = true;
  var sender = document.cont_form.user_name.value;
  var mail = document.cont_form.user_mail.value;
  var uPhone = document.cont_form.user_tel.value
  var error_msg = "Некорректно заполнены поля:\n";
  var reg_sender = /[a-я,0-9]/i;
  var reg_phone = /^\d[\d\(\)\ -]{4,14}\d$/;
  var reg_mail = /[0-9a-z_]+@[0-9a-z_^.]+.[a-z]{2,3}/i;
        if ( document.cont_form.user_name.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Имя'." );
                valid = false;
        }
        if ( reg_sender.exec(sender) == null )
        {
                error_msg += "Ваше Имя\n";
                valid = false;
        }
        if (reg_phone.exec(uPhone) == null) {
                error_msg += "Номер Вашего телефона\n";
                valid = false;
        }
        if(reg_mail.exec(mail) == null)
        {
                error_msg += "Ваш e-mail\n";
                valid = false;
        }
        if (!valid) {
          alert(error_msg);
        }
        return valid;
}
