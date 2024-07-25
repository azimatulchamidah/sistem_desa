const Berita = require('../models/Berita');

exports.createBerita = async (req, res) => {
  try {
    const berita = new Berita(req.body);
    await berita.save();
    res.status(201).send(berita);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBeritas = async (req, res) => {
  try {
    const beritas = await Berita.find();
    res.status(200).send(beritas);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findById(req.params.id);
    if (!berita) {
      return res.status(404).send();
    }
    res.status(200).send(berita);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBerita = async (req, res) => {
  try {
    const berita = await Berita.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!berita) {
      return res.status(404).send();
    }
    res.status(200).send(berita);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBerita = async (req, res) => {
  try {
    const berita = await Berita.findByIdAndDelete(req.params.id);
    if (!berita) {
      return res.status(404).send();
    }
    res.status(200).send(berita);
  } catch (error) {
    res.status(500).send(error);
  }
};
