import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { Lesson } from '../lesson/lesson.entity';
import { Student } from '../student/student.entity';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  useNewUrlParser: dbConfig.useNewUrlParser,
  username: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database,
  useUnifiedTopology: dbConfig.useUnifiedTopology,
  ssl: dbConfig.ssl,
  replicaSet: dbConfig.replicaSet,
  authSource: dbConfig.authSource,
  entities: [Lesson, Student],
};
