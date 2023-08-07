import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        return  Post.create({...post, picture: fileName})
    }

    async getAll() {
        return Post.find()
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Id not defined")
        }
        return Post.findById(id);
    }

    async update(post) {
        if (!post._id) {
            throw new Error("Id not defined")
        }

        return Post.findByIdAndUpdate(post._id, post, {new: true})

    }

    async delete(id) {
        if (!id) {
            throw new Error("Id not defined")
        }
        const post = await Post.findByIdAndDelete(id)

        return {message: `Post with id ${id} was deleted!`}

    }
}

export default new

PostService()