const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const kelolaBeritaSchema = new mongoose.Schema({
  id_kelolaberita: {
    type: Number,
    unique: true,
  },
  id_berita: {
    type: Number,
    ref: 'Berita',
    required: true
  },
  kategori: {
    type: String,
    required: true
  },
  tanggal_upload: {
    type: Date,
    required: true
  },
  tanggal_update: {
    type: Date,
    required: true
  }
});
kelolaBeritaSchema.plugin(AutoIncrement, { inc_field: 'id_kelolaberita', start_seq: 1 });

module.exports = mongoose.model('KelolaBerita', kelolaBeritaSchema);
