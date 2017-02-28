var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Express Sample WebApp' ,
  		subTitle: 'Website Application example using node.js | express.js',
  		messageOpening: 'Welcome, this is my personal page',
  		judulCol1:"Biodata Pribadi",
  			messageCol1_nama:"Nama : Ignatius Aldi Pradana",
  			messageCol1_jk:"Jenis Kelamin : Laki-Laki ",
  			messageCol1_tglLahir:"Tanggal Lahir : 29 Februari 1996 ",
  			messageCol1_alamat:"Alamat : Jalan Pandean 1 / 55 , Condong Catur, Yogyakarta ",
  			messageCol1_status:"Masih mencari jodoh :D ",
  		judulCol2:"Data Instansi",
  			messageCol2_namaInstansi:"Universitas Atma Jaya Yogyakarta",
  			messageCol2_jurusan:"Teknik Informatika",
  			messageCol2_konsentrasi:"Development -	 Mobile Computing",
  			messageCol2_angkatan:"2014",
  		judulCol3:"Motivasi",
  			messageCol3_quote:"Kuliah tidak cukup untuk menghidupimu !",
  			messageCol3_alasan:"Workshop ini adalah salah satu kesempatan emas saya untuk berkembang.",
  			messageCol3_alasan2:"Saya tertarik untuk menambah wawasan terhadap teknologi yang digunakan saat ini.",
  			messageCol3_alasan3:"Sehingga saya dapat mempersiapkan diri untuk bersaing di dunia kerja nantinya. ",
  		footer:"@igprad 2017"
	});
});

module.exports = router;
