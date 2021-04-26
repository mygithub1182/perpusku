import Header from '../components/header'
import Icon from '../components/icon'
import Footer from '../components/footer'
import CardRiwayatPinjaman from '../components/cardRiwayatPinjaman'

export default function Pinjaman(){
    const dataPinjam =[{judulBuku:"Pemograman Web", tglPinjam:"2021-03-20", imgUrl:'assets/img/buku-smk-kelas-10-pemrograman-webpdf-1-638.jpg'},
                        {judulBuku:"Sistem Operasi", tglPinjam:"2021-03-04", imgUrl:"assets/img/images.jpg"}]
    return(   
        <div>  
        <div>
            <Icon/>
            <Header/>
        </div>
        <div id="cari-buku" style={{background: 'var(--bs-white)'}}>
        <div className="container" style={{marginTop: 18}}>
            <div className="row" style={{borderBottomStyle: 'solid', borderBottomColor: 'var(--bs-blue)'}}>
                <h1 style={{fontSize: 25}}>RIWAYAT PEMINJAMAN</h1>
            </div>
            {dataPinjam.map((buku)=>(
                <CardRiwayatPinjaman judulBuku = {buku.judulBuku} tglPinjam = {buku.tglPinjam} imgUrl = {buku.imgUrl}/>
            ))}
           {/* Here Card Pinjam  */}
        </div>
        <nav className="text-start d-xl-flex justify-content-xl-center" style={{marginTop: 15, fontSize: 17}}>
            <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
            </ul>
        </nav>
        </div>
        <Footer />
        </div> 
    )
}