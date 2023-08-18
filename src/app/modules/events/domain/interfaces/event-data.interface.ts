
export interface Session {
  date: string;
  availability:number;
  id: string,
  title: string;
}

export interface EventInfo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface IEventData {
  event: EventInfo;
  sessions: Session[];
}
