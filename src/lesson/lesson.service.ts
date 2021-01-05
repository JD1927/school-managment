import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLessonInput } from './dto/lesson.input';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
    private http: HttpService,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    return this.lessonRepository.createLesson(createLessonInput);
  }

  async getLessonByID(id: string): Promise<Lesson> {
    return this.lessonRepository.getLessonByID(id);
  }

  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.getAllLessons();
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    return this.lessonRepository.assignStudentsToLesson(lessonId, studentIds);
  }
}
