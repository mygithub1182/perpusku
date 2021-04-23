import Footer from '../components/footer'
import Header from '../components/header'
import Icon from '../components/icon'
import Carousel from '../components/carousel'
import CardPinjamanSaya from '../components/cardPinjamanSaya'
import CardBukuTerbaru from '../components/cardBukuTerbaru'
export default function Home(){
    return(
        <div>
            <Icon />
        <Header/>
      <div id="content">

        <Carousel />
<div id="buku-terbaru" style={{marginTop: 42}}>
    <section className="projects-clean">
      <h3 className="name" style={{margin: 13, textAlign: 'center', fontSize: 34, borderBottomColor: 'var(--bs-indigo)', height: 87, paddingTop: 40, marginTop: '-44px'}}><strong>PINJAMAN SAYA</strong></h3>
      <div className="container">
        <div className="row projects">
        <CardPinjamanSaya />
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/Buku%20Matematika%20Kurikulum%202013%20Kelas%20X%20XI%20SMA%20SMK%20MA.png" style={{height: '258.141px'}} />
            <h3 className="name">Matematika</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl_Pinjam : 2021-03-04-20</span>
            <p className="description" style={{marginBottom: 8}}>Buku ini membahas tentang matematika</p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{borderRadius: 65, background: 'var(--bs-dark)'}}>Kembalikan</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/gambar%20cover%20buku%20kimia%20BK%20Teknologi%20dan%20rekayasa.png" style={{height: '258.141px'}} />
            <h3 className="name">Bahan Ajar Kimia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl_Pinjam : 2021-04-05-20</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang bahan ajar kimia</p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{background: 'var(--bs-dark)', borderRadius: 33}}>Kembalikan</button></a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="buku-terbaru">
    <section className="projects-clean" style={{marginTop: '-17px'}}>
      <h3 className="name" style={{margin: 13, textAlign: 'center', fontSize: 34, borderBottomColor: 'var(--bs-indigo)', height: 62, paddingTop: 20}}><strong>BUKU TERBARU</strong></h3>
      <div className="container">
        <div className="row projects">
        <CardBukuTerbaru />
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/Buku%20Matematika%20Kurikulum%202013%20Kelas%20X%20XI%20SMA%20SMK%20MA.png" style={{height: '258.141px'}} />
            <h3 className="name">Matematika</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 7 buku | Penerbit : Gramedia</span>
            <p className="description" style={{marginBottom: 8}}>Buku ini membahas tentang matematika</p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 95, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/gambar%20cover%20buku%20kimia%20BK%20Teknologi%20dan%20rekayasa.png" style={{height: '258.141px'}} />
            <h3 className="name">Bahan Ajar Kimia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang bahan ajar kimia</p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 29, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/simulasi-digital-jilid-2-1-638.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Simulasi Digital</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 3 buku | Penerbit Gramedia</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang simulasi Digital<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 45, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/images.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Sistem Operasi</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang Sistem Operasi<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 69, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/buku-smk-kelas-10-pemrograman-webpdf-1-638.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Pemrograman Web</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang Pemograman Web<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 64, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col" style={{paddingTop: 21, background: '#2E8B57', marginTop: 46}}>
            <nav style={{margin: 'auto', marginLeft: 52, background: '#2E8B57'}}>
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                <li className="page-item active" style={{background: '#2E8B57', color: '#2E8B57', borderTopColor: '#2E8B53'}}><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<Footer />
</div>
    )
}