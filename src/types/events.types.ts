


export interface IEvent {
  name: string;
  start: Date;
  end: Date;
  description: string;
}


export type UpdateEvent = Partial<IEvent>