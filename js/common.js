$(function() {
    // 设置自适应高

    // 问题一：使用window.resize 兼容问题
    // $(window).resize(function() {
    $(".panel").height($(window).height());
    $(".left").height($(window).height() - 110);
    $(".right").height($(window).height() - 110);
    // alert( $(".panel").height($(window).height()).height());
    // });

    //问题二：radio的checked问题

    // var gender = $("input[name='gender']:checked").val();
    $("#myForm-submit").click(function() {
        var $username = $("input[name='username']");
        var $password = $("input[name='password']");
        var $passwordConfirm = $("input[name='passwordConfirm']");
        var $email = $("input[name='email']");

        var $gender = $("input[type='radio']:checked");


        if ($username.val().length < 6 || $username.val().length > 20) {
            alert("用户名长度必须在6到20个字符之间!");
            $username.val('').focus();
            return false;
        } else if ($password.val().length < 6 || $password.val().length > 20) {
            alert("密码长度必须在6到20个字符之间!");
            $password.val('').focus();
            return false;
        } else if ($passwordConfirm.val().length < 6 || $passwordConfirm.val().length > 20) {
            alert("确认密码长度必须在6到20个字符之间!");
            $passwordConfirm.val('').focus();
            return false;
        } else if ($password.val() != $passwordConfirm.val()) {
            alert("密码与确认密码不匹配!");
            $password.val('').focus();
            $passwordConfirm.val('');
            return false;
        } else {
            alert($gender.val());

            // List中添加
            /*
            	<tr><td><input type="checkbox" name="">'+$username.val()+'</td>"
            	+"<td>学生</td><td>"+$email.val()
            	+"</td><td>男</td><td>书法、乐器</td><td><a href=''>编辑</a><a href=''>删除</a></td>"
            	+"</tr>"
            */
            // $(".myList-table>tbody").append('<tr><td colspan="6">666</td></tr>');
        }
    });

});