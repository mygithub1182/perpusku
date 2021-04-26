export default function CardRiwayatPinjaman (props){
    return(
        <div>
        <div className="row" style={{borderBottomStyle: 'solid', borderBottomColor: 'var(--bs-blue)'}}>
                <div className="col-md-4"><img src={props.imgUrl} style={{height: 186, width: '141.781px', margin: 6, padding: 5, marginLeft: 83}} /></div>
                <div className="col" style={{filter: 'blur(0px)'}}>
                    <h1 style={{fontSize: 18}}>{props.judulBuku}</h1>
                    <p>ID Pinjam : {props.idPinjam} | Tgl-Pinjam : {props.tglPinjam}<br /></p><a href="pengembaliansukses"><button className="btn btn-primary" type="button" style={{fontFamily: '#2E8B57', borderRadius: 68, background: '#2E8B57'}}>Kembalikan</button></a>
                </div>
            </div>
        </div>
    )
}
{/* <div className="row" style={{borderBottomStyle: 'solid', borderBottomColor: 'var(--bs-blue)'}}>
<div className="col-md-4"><img src="assets/img/buku-smk-kelas-10-pemrograman-webpdf-1-638.jpg" style={{height: 186, width: '141.781px', margin: 6, padding: 5, marginLeft: 83}} /></div>
<div className="col" style={{filter: 'blur(0px)'}}>
    <h1 style={{fontSize: 18}}>PEMROGRAMAN WEB</h1>
    <p>ID Pinjam : P002 | Tgl-Pinjam : 2021-02-23<br /></p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{fontFamily: '#2E8B57', borderRadius: 68, background: '#2E8B57'}}>Kembalikan</button></a>
</div>
</div>
<div className="row" style={{borderBottomStyle: 'solid', borderBottomColor: 'var(--bs-blue)'}}>
<div className="col-md-4"><img src="assets/img/images.jpg" style={{height: 186, width: '141.781px', margin: 6, padding: 5, marginLeft: 83}} /></div>
<div className="col">
    <h1 style={{fontSize: 18}}>SISTEM OPERASI</h1>
    <p>ID Pinjam : P002 | Tgl-Pinjam : 2021-02-23 | Tgl-Kembali : 2021-03-04<br /></p><a href="kembali.html"><button className="btn btn-primary" type="button" style={{fontFamily: '#2E8B57', borderRadius: 68, background: '#2E8B57'}}>Kembalikan</button></a>
</div>
</div> */}