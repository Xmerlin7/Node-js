import fs from "fs/promises";
import path from "path";
import Root_Dir from "../util/path.js";

export default class Teacher {
  constructor(name, email, subject, experience) {
    this.id;
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.experience = experience;
  }

  static async getAll() {
    let data = await fs.readFile(path.join(Root_Dir, "data", "teachers.json"), "utf-8")
    return JSON.parse(data);
  }
}
