import axios from "axios";

const handleError = (e) => {
  alert(e.response.data.message);
  console.log(e.response.data);
};

class PostService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000/api",
    });
  }

  async getAll() {
    try {
      const { data } = await this.client.get("posts");

      return data;
    } catch (e) {
      handleError(e);
    }
    return [];
  }

  async addComment(comment, postId) {
    try {
      const { data } = await this.client.post("posts/" + postId + "/comments", {
        text: comment,
      });
      return data;
    } catch (e) {
      handleError(e);
    }
  }

  async get(id) {
    try {
      const { data } = await this.client.get(
        "posts/" + id + '?filter={"include":["comments"]}'
      );
      return data;
    } catch (e) {
      handleError(e);
    }
  }

  async add(newPost) {
    try {
      const { data } = await this.client.post("posts", newPost);
      return data;
    } catch (e) {
      handleError(e);
    }
    return null;
  }

  async edit(post) {
    try {
      const { data } = await this.client.put("posts/" + post.id, post);
      return data;
    } catch (e) {
      handleError(e);
    }
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete("posts/" + id);
      return data;
    } catch (e) {
      handleError(e);
    }
  }
}

export default new PostService();
