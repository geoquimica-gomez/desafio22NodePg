import { pool } from "../database/connection.js";
import { handleErrors } from "../database/errors.js";

// Función genérica para manejar errores en consultas
const handleQueryError = (error) => {
    console.error("Error en consulta:", error.message || error);
    const handledError = handleErrors(error.code || "500");
    throw handledError;
};

// Obtener todos los posts
const findAll = async () => {
    try {
        const { rows } = await pool.query("SELECT * FROM posts");
        return rows;
    } catch (error) {
        handleQueryError(error);
    }
};

// Obtener un post por ID
const findById = async (id) => {
    try {
        const query = "SELECT * FROM posts WHERE id = $1";
        const { rows } = await pool.query(query, [id]);
        if (rows.length === 0) {
            throw { code: "404" };
        }
        return rows[0];
    } catch (error) {
        handleQueryError(error);
    }
};

// Crear un nuevo post
const createPost = async (post) => {
    try {
        const { titulo, img, descripcion } = post;
        if (!titulo?.trim() || !img?.trim() || !descripcion?.trim()) {
            throw { code: "400" };
        }
        const consulta = 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *;';
        const values = [titulo, img, descripcion];
        const { rows } = await pool.query(consulta, values);
        return rows[0];
    } catch (error) {
        handleQueryError(error);
    }
};

// Incrementar likes de un post
const createLike = async (id) => {
    try {
        const consulta = `
            UPDATE posts
            SET likes = COALESCE(likes, 0) + 1
            WHERE id = $1
            RETURNING *;
        `;
        const { rows } = await pool.query(consulta, [id]);
        if (rows.length === 0) {
            throw { code: "404" }; // Lanza error si el post no existe
        }
        return rows[0];
    } catch (error) {
        console.error("Error en createLike:", error.message);
        const handledError = handleErrors(error.code || "500");
        throw handledError;
    }
};

// Actualizar un post
const createUpdate = async (post) => {
    try {
        const { id, titulo, img, descripcion, likes } = post;
        if (!id || !titulo?.trim() || !img?.trim() || !descripcion?.trim() || likes === undefined) {
            throw { code: "400" };
        }
        const consulta = 'UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes = $5 WHERE id = $1 RETURNING *;';
        const values = [id, titulo, img, descripcion, likes];
        const { rows } = await pool.query(consulta, values);
        if (rows.length === 0) {
            throw { code: "404" };
        }
        return rows[0];
    } catch (error) {
        handleQueryError(error);
    }
};

// Eliminar un post
const deletePost = async (id) => {
    try {
        const consulta = 'DELETE FROM posts WHERE id = $1 RETURNING *;';
        const { rows } = await pool.query(consulta, [id]);
        if (rows.length === 0) {
            throw { code: "404" };
        }
        return rows[0];
    } catch (error) {
        handleQueryError(error);
    }
};

// Exportar las funciones
export const postModel = {
    findAll,
    findById,
    createPost,
    createLike,
    createUpdate,
    deletePost,
};
