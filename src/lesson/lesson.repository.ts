import { EntityRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './dto/lesson.input';
import { Lesson } from './lesson.entity';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = new Lesson();

    lesson.id = uuid();
    lesson.name = name;
    lesson.startDate = startDate;
    lesson.endDate = endDate;
    lesson.students = [...students];

    return lesson.save();
  }

  async getLessonByID(id: string): Promise<Lesson> {
    return this.findOne({ id });
  }

  async getAllLessons(): Promise<Lesson[]> {
    return this.find();
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentsIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.findOne({ id: lessonId });

    lesson.students = [...lesson.students, ...studentsIds];
    return lesson.save();
  }
}
