import fs from "fs";
const Picture = require("../models/Picture");

exports.create = async (req:Request, res:Response) => {
  try {

    const file = req.file;
    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();
    res.json(picture);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

exports.remove = async (req:Request, res:Response) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.src);
    await picture.remove();
    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};

exports.findAll = async (req:Request, res:Response) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
};



exports.update = async (req:Request, res:Response) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    if (req.file) {
      
      const oldImageSrc = picture.src;

     
      fs.unlinkSync(oldImageSrc);

   
      const newImageSrc = req.file.path;

    
      picture.src = newImageSrc;
    }

   
    await picture.save();

    res.json({ message: "Imagem atualizada com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar a imagem" });
  }
};
