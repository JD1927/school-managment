import { EntityRepository, Repository } from 'typeorm';
import { CreateStudentInput } from './dto/student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = new Student();

    student.id = uuid();
    student.firstName = firstName;
    student.lastName = lastName;

    return student.save();
  }

  async getStudentByID(id: string): Promise<Student> {
    return this.findOne({ id });
  }

  async getAllStudents(): Promise<Student[]> {
    return this.find();
  }

  async getStudentsByIDs(studentsIDs: string[]): Promise<Student[]> {
    return this.find({
      where: {
        id: {
          $in: studentsIDs,
        },
      },
    });
  }
}
