import Footer from '../components/footer'
import Header from '../components/header'
import Icon from '../components/icon'
import CardBukuTerbaru from '../components/cardBukuTerbaru'
import CardPinjamanSaya from '../components/cardPinjamanSaya'
import Carousel from '../components/carousel'

export default function Home(){
  const dataBuku=[{imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
              judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
              penerbit: 'Gramedia', 
              deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
              {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
              judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
              penerbit: 'Gramedia', 
              deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
              {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
              judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
              penerbit: 'Gramedia', 
              deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
              {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
              judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
              penerbit: 'Gramedia', 
              deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
              {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
              judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
              penerbit: 'Gramedia', 
              deskripsi: 'Buku ini membahas tentang Desain Multimedia' }]
  const dataPinjamanSaya=[{imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
                          judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
                          tglPinjam: '2021-03-04', 
                          deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
                          {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
                          judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
                          tglPinjam: '2021-03-04', 
                          deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
                          {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
                          judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
                          tglPinjam: '2021-03-04', 
                          deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
                          {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
                          judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
                          tglPinjam: '2021-03-04', 
                          deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
                          {imgUrl: 'assets/img/bse-a_5a0260a47533a722057742.jpg', 
                          judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
                          tglPinjam: '2021-03-04', 
                          deskripsi: 'Buku ini membahas tentang Desain Multimedia' }]  
  return(
        <div>
            <Icon />
        <Header/>
      <div id="content">
  <div className="container">
    <div className="row">
      <div className="col" style={{marginTop: 0, marginBottom: 29}}>
        <div className="d-flex align-items-center" style={{width: 296}}><label className="form-label d-flex mb-0" htmlFor="search-field" style={{paddingLeft: '-12px'}}><a href="cari-buku.html"><i className="fa fa-search" style={{fontSize: 21, marginRight: 10, paddingRight: '-22px', marginTop: 23, color: '#2E8B57'}} /></a></label><input type="search" id="search-field-2" className="search-field" name="search" style={{width: 236, textAlign: 'left', marginRight: 136, paddingRight: '-45px', paddingLeft: '-170px', marginLeft: 1, paddingTop: '-8px', marginTop: 25, fontFamily: 'timenew roamn', fontSize: 32, color: 'var(--bs-dark)', borderTopColor: 'rgba(118,118,118,0)', borderRightColor: 'rgba(118,118,118,0)', borderBottomWidth: 2, borderBottomColor: 'var(--bs-dark)', borderLeftColor: 'rgba(118,118,118,0)'}} placeholder="Cari buku disini" /></div>
      </div>
    </div>
  </div>
  <Carousel/>
  <div id="buku-terbaru" style={{marginTop: 42}}>
    <section className="projects-clean">
      <h3 className="name" style={{margin: 13, textAlign: 'center', fontSize: 34, borderBottomColor: 'var(--bs-indigo)', height: 87, paddingTop: 40, marginTop: '-44px'}}><strong>PINJAMAN SAYA</strong></h3>
      <div className="container">
        <div className="row projects">
          {dataPinjamanSaya.map((buku)=>(
            <CardPinjamanSaya imgUrl={buku.imgUrl} judulBuku={buku.judulBuku}
             tglPinjam={buku.tglPinjam} deskripsi={buku.deskripsi}/>
          ))}
          {/* Here Pinjaman Saya */}
        </div>
      </div>
    </section>
  </div>
  <div id="buku-terbaru">
    <section className="projects-clean" style={{marginTop: '-17px'}}>
      <h3 className="name" style={{margin: 13, textAlign: 'center', fontSize: 34, borderBottomColor: 'var(--bs-indigo)', height: 62, paddingTop: 20}}><strong>BUKU TERBARU</strong></h3>
      <div className="container">
        <div className="row projects">
          {dataBuku.map((buku) => (
            <CardBukuTerbaru imgUrl={buku.imgUrl} judulBuku={buku.judulBuku}
                    stokBuku={buku.stokBuku} penerbit={buku.penerbit} deskripsi={buku.deskripsi}/>

          ))}
          {/* Here Card Buku Terbaru */}
          
        </div>
        <div className="col" style={{paddingTop: 10, marginTop: 46}}>
            <nav style={{margin: 'auto', marginLeft: 52}}>
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
    </section>
  </div>
</div>
<Footer />
</div>
    )
}