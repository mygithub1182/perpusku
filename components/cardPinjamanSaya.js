export default function CardPinjamanSaya(props){
    return(
    <>
          <div className="col-sm-6 col-lg-4 item" style={{color: 'var(--bs-dark)'}}><img className="img-fluid" src={props.imgUrl} style={{height: '258.141px'}} />
            <h3 className="name" style={{color: 'var(--bs-dark)'}}>{props.judulBuku}</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl-Pinjam : {props.tglPinjam}</span>
            <p className="description" style={{marginBottom: 10, marginTop: 7}}>{props.deskripsi}<br /></p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{borderRadius: 41, borderTopColor: 'var(--bs-gray-dark)', background: 'rgb(0,0,0)'}}>Kembalikan</button></a>
          </div>
    </>
    )
    
}

{/* <div className="col-sm-6 col-lg-4 item" style={{color: 'var(--bs-dark)'}}><img className="img-fluid" src="assets/img/bse-a_5a0260a47533a722057742.jpg" style={{height: '258.141px'}} />
            <h3 className="name" style={{color: 'var(--bs-dark)'}}>Desain Multimedia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl-Pinjam : 2021-03 - 02</span>
            <p className="description" style={{marginBottom: 10, marginTop: 7}}>Buku ini membahas tentang Desain Multimedia<br /></p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{borderRadius: 41, borderTopColor: 'var(--bs-gray-dark)', background: 'rgb(0,0,0)'}}>Kembalikan</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/Buku%20Matematika%20Kurikulum%202013%20Kelas%20X%20XI%20SMA%20SMK%20MA.png" style={{height: '258.141px'}} />
            <h3 className="name">Matematika</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl_Pinjam : 2021-03-04-20</span>
            <p className="description" style={{marginBottom: 8}}>Buku ini membahas tentang matematika</p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{borderRadius: 65, background: 'var(--bs-dark)'}}>Kembalikan</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/gambar%20cover%20buku%20kimia%20BK%20Teknologi%20dan%20rekayasa.png" style={{height: '258.141px'}} />
            <h3 className="name">Bahan Ajar Kimia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl_Pinjam : 2021-04-05-20</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang bahan ajar kimia</p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{background: 'var(--bs-dark)', borderRadius: 33}}>Kembalikan</button></a>
          </div> */}