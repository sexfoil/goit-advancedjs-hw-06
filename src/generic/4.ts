/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Property {
  title: any
}

class Component<T extends Property> {
  constructor (public props:T) {

  }
}

class Page extends Component<Property> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};