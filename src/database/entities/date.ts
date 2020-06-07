import { Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseDate {
  
  @CreateDateColumn({
    type: 'timestamp',
    comment: '등록일'
  })
  public regDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    comment: '수정일'
  })
  public updateDate: Date;
}