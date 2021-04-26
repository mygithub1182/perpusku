import Footer from '../components/footer'
import Header from '../components/header'
import Icon from '../components/icon'
import Carousel from '../components/carousel'

export default function pinjamansukses (){
    return (
    <div>
        <Header/>
        <div className="row" style={{height: 452}}>
            <div className="col">
            <div className="bs-callout bs-callout-success">
                <h4>Sukses!</h4>
                <p>Buku berhasil dipinjam!<br /><strong>Mohon tunjukkan ID Siswa dan ID Buku ke Admin</strong></p>
                <h1>ID SISWA : S001</h1>
                <h1>ID BUKU : B001</h1>
                <p><strong>Jika sudah menunjukkan ke Admin, klik Tombol selesai untuk menampilkan posisi buku.</strong></p><button className="btn btn-primary" type="button" style={{fontSize: 17, background: 'rgb(0,166,36)'}}>Selesai</button>
                <p><strong>Buku dengan ID Buku B001 ada di rak B baris ke- 5</strong></p><a id="buttonKembali" href="home"><button className="btn btn-primary" type="button" style={{fontSize: 17, background: 'rgb(210,42,32)'}}>Kembali</button></a>
            </div>
            </div>
        </div>
        <Footer />
    </div>

    )
}