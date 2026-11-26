class Karyawan {
    constructor(nama) {
        this.nama = nama
    }

    info() {
        console.log("Karyawan: " + this.nama)
    }
}

class KaryawanTetap extends Karyawan {
    hitungLembur(jam) {
        console.log(this.nama + " lembur " + jam + " jam, upah Rp " + (jam * 50000) + ".")
    }
}

class KaryawanMagang extends Karyawan {
    terimaUangSaku(nominal) {
        console.log(this.nama + " menerima uang saku Rp " + nominal + ".")
    }
}

class Programmer extends KaryawanTetap {}

class Magang extends KaryawanMagang {}

class Desainer extends KaryawanTetap {}

function prosesLembur(daftar) {
    daftar.forEach(x => x.hitungLembur(3))
}

function berikanUangSaku(daftar) {
    daftar.forEach(x => x.terimaUangSaku(1500000))
}

const budi = new Programmer("Budi_3317")
const rina = new Magang("Rina_3317")
const sari = new Desainer("Sari_3317")

budi.info()
rina.info()
sari.info()

prosesLembur([budi, sari])
berikanUangSaku([rina])
 