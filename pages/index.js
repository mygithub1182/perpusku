import  '../styles/Home.module.css'
import Image from 'next/image'
import Footer from '../components/footer'

//@ts-nocheck

export default function Login() {
  return (
    <div>
      
    <section className="login-clean">
        <form method="post">
            <div className="illustration" style={{"height": "210.328px"}}><Image src="/smk.png" alt="Picture of the author" width={170} height={170} margin={'auto'} className="d-flex m-auto"/>
                <h1 style={{marginTop:"11px", fontSize: "3 54px;", color:"#2E8B57"}}>LOGIN</h1>
                <p style={{fontSize: "16px", color: "rgb(25,25,25)", textAlign:"center",fontWeight: "bold;"}}>Sistem Perpustakaan SMK</p>
            </div><br/>
            <div className="mb-3"><input className="form-control" type="text" id="username" name="email" placeholder="Username" style={{marginTop: "72px"}}/></div>
            <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
            <div><a href="/home"><button className="btn btn-primary" type="button" style={{width: '240px',background: "#2E8B57"}}>Login</button></a></div>
            <p style={{fontSize: "16px;",color: "#2E8B57",textAlign: "center",fontWeight: "bold",marginTop: "18px"}}>Jika tidak mengetahui username dan password, silahkan menghubungi Admin</p><a href="register.html"></a>
            <div className="mb-3"></div>
        </form>
    </section>
    <Footer />
    </div>
  )
  
}
