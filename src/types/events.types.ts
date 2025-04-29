


export interface IEvent {
  _id: string;
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
}

export interface EventBody {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
}


export type UpdateEventBody = Partial<EventBody>