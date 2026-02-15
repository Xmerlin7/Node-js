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
  static async readfile() {
    let data = await fs.readFile(
      path.join(Root_Dir, "data", "teachers.json"),
      "utf-8",
    );
    return JSON.parse(data);
  }
  static async getAll() {
    let teachers = await this.readfile();
    return teachers;
  }

  static async saveAll(teachers) {
    await fs.writeFile(
      path.join(Root_Dir, "data", "teachers.json"),
      JSON.stringify(teachers),
    );
  }
}
