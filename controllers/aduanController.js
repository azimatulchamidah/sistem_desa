const Aduan = require('../models/Aduan');

exports.createAduan = async (req, res) => {
  try {
    const aduan = new Aduan(req.body);
    await aduan.save();
    res.status(201).send(aduan);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAduans = async (req, res) => {
  try {
    const aduans = await Aduan.find();
    res.status(200).send(aduans);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAduanById = async (req, res) => {
  try {
    const aduan = await Aduan.findById(req.params.id);
    if (!aduan) {
      return res.status(404).send();
    }
    res.status(200).send(aduan);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateAduan = async (req, res) => {
  try {
    const aduan = await Aduan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!aduan) {
      return res.status(404).send();
    }
    res.status(200).send(aduan);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteAduan = async (req, res) => {
  try {
    const aduan = await Aduan.findByIdAndDelete(req.params.id);
    if (!aduan) {
      return res.status(404).send();
    }
    res.status(200).send(aduan);
  } catch (error) {
    res.status(500).send(error);
  }
};
