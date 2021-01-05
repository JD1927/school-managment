import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/student.input';
import { StudentType } from './graphql/student.type';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(() => StudentType)
  async getStudentByID(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentByID(id);
  }

  @Query(() => [StudentType])
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }
}
