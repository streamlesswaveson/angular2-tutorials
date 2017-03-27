import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class JimmyService {

  constructor(private http: Http) {

  }

  storeBurger(burger: any) {
    const headers = new Headers({'X-Jimmy-Header': 'A pirate looks at 40'})
    return this.http.post('http://localhost:8080/cheeseburger',
      burger,
      {headers: headers});

  }

  updateBurger(burger: any) {
    return this.http.put('http://localhost:8080/cheeseburger/' + burger.uuid,
      burger);
  }

  getBurgers() {
    return this.http.get('http://localhost:8080/cheeseburger')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
