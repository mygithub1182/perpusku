function Login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if((username == "admin") &&  (password == "admin")){

        document.getElementsByTagName("a")[0].setAttribute("href","beranda_admin.html");
    }else{
        document.getElementsByTagName("a")[0].setAttribute("href","beranda-user.html");
    }
}