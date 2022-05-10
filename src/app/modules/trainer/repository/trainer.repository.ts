import { EntityRepository, Repository } from 'typeorm';
import { Trainer } from '../../core/interfaces/trainer.interface';

@EntityRepository(Trainer)
export class TrainerRepository extends Repository<Trainer> {}
