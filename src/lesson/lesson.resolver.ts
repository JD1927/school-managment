import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Student } from 'src/student/student.entity';
import { StudentService } from 'src/student/student.service';
import { AssignStudentsToLessonInput } from './dto/assign-students-lesson.input';
import { CreateLessonInput } from './dto/lesson.input';
import { LessonType } from './graphql/lesson.type';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Query(() => LessonType)
  async getLessonByID(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLessonByID(id);
  }

  @Query(() => [LessonType])
  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<LessonType> {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentsIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson): Promise<Student[]> {
    return this.studentService.getStudentsByIDs(lesson.students);
  }
}
