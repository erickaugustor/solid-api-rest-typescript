import { uuid } from 'uuidv4';

export class User {

  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.name = props.name;
    this.email = props.name;
    this.password = props.name;

    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}