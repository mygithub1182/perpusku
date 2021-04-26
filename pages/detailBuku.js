import Footer from '../components/footer'
import Header from '../components/header'
import Icon from '../components/icon'
import CardDetail from '../components/cardDetail'

export default function DetailBuku(){
    const dataBuku = {idBuku:"B001", imgUrl:"assets/img/bse-a_5a0260a47533a722057742.jpg", judulBuku:"Desain Multimedia", 
                pengarang:"Adi Mulu", penerbit:"Erlangga", stokBuku:10, deskripsi:"Buku ini membahas tentang"}
    return(
        <div>
            <div>
                <Icon/>
                <Header/>
            </div>
            <CardDetail imgUrl={dataBuku.imgUrl} judulBuku={dataBuku.judulBuku} idBuku={dataBuku.idBuku}
                        pengarang={dataBuku.pengarang} penerbit={dataBuku.penerbit}
                        stokBuku={dataBuku.stokBuku} deskripsi={dataBuku.deskripsi} />
            <Footer />
        </div>
    )
}