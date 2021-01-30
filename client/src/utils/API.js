import axios from "axios";

export default {

  // Gets all Projects
  getProjects: function() {
    return axios.get("/api/Projects");
  },
  // Gets the Project with the given id
  getProject: function(id) {
    return axios.get("/api/Projects/" + id);
  },
  // Deletes the Project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/Projects/" + id, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  
  send: function(res) {
    return axios.post("/api/send");
  },
};