import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './dto/student.input';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentRepository.createStudent(createStudentInput);
  }
  async getStudentByID(id: string): Promise<Student> {
    return this.studentRepository.getStudentByID(id);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.getAllStudents();
  }

  async getStudentsByIDs(studentsIDs: string[]): Promise<Student[]> {
    return this.studentRepository.getStudentsByIDs(studentsIDs);
  }
}
