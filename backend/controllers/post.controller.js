import { postModel } from '../models/post.model.js';
import { handleErrors } from '../database/errors.js';

const read = async (req, res) => {
    try {
        const result = await postModel.findAll();
        res.status(200).json(result);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        res.status(status).json({ ok: false, message });
    }
};

const readById = async (req, res) => {
    const { id } = req.params; // Corregido
    try {
        const result = await postModel.findById(id);
        res.status(200).json(result);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        res.status(status).json({ ok: false, message });
    }
};

const create = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        if (!titulo?.trim() || !img?.trim() || !descripcion?.trim()) {
            return res.status(400).json({ ok: false, message: "Todos los campos son obligatorios" });
        }
        const newPost = await postModel.createPost({ titulo, img, descripcion });
        res.status(201).json(newPost);
    } catch (error) {
        const { status, message } = handleErrors(error.code || "500");
        res.status(status).json({ ok: false, message });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const result = await postModel.createUpdate({ id, titulo, img, descripcion, likes });
        res.status(200).json(result);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        res.status(status).json({ ok: false, message });
    }
};

const updateLike = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postModel.createLike(id);
        res.status(200).json(result);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        res.status(status).json({ ok: false, message });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postModel.deletePost(id);
        res.status(200).json(result);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        res.status(status).json({ ok: false, message });
    }
};

const notFound = (req, res) => {
    res.status(404).json({ ok: false, message: "Ruta no encontrada" });
};

export const postController = {
    read,
    create,
    readById,
    update,
    updateLike,
    remove,
    notFound
};

