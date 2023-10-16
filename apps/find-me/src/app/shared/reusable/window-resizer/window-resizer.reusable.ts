import { debounceTime } from 'rxjs';
import { fromEvent, Observable } from 'rxjs';

export function getResizeEvent$(): Observable<Event> {
  return fromEvent(window, 'resize').pipe(debounceTime(30))
}