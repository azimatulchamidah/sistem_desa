const KelolaBerita = require('../models/KelolaBerita');

exports.createKelolaBerita = async (req, res) => {
  try {
    const kelolaBerita = new KelolaBerita(req.body);
    await kelolaBerita.save();
    res.status(201).send(kelolaBerita);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getKelolaBeritas = async (req, res) => {
  try {
    const kelolaBeritas = await KelolaBerita.find();
    res.status(200).send(kelolaBeritas);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getKelolaBeritaById = async (req, res) => {
  try {
    const kelolaBerita = await KelolaBerita.findById(req.params.id);
    if (!kelolaBerita) {
      return res.status(404).send();
    }
    res.status(200).send(kelolaBerita);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateKelolaBerita = async (req, res) => {
  try {
    const kelolaBerita = await KelolaBerita.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!kelolaBerita) {
      return res.status(404).send();
    }
    res.status(200).send(kelolaBerita);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteKelolaBerita = async (req, res) => {
  try {
    const kelolaBerita = await KelolaBerita.findByIdAndDelete(req.params.id);
    if (!kelolaBerita) {
      return res.status(404).send();
    }
    res.status(200).send(kelolaBerita);
  } catch (error) {
    res.status(500).send(error);
  }
};
