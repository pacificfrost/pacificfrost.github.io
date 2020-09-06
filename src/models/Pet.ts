import Vet from '@/models/Vet';

class Pet {
  age: number | null;
  breed: string;
  contact: {
    vetContact: Vet;
    phone: '';
  };
  description: string;
  dob: string;
  id: string;
  image: Array<URL> | Array<string>;
  location: Array<number>;
  name: string;
  social: boolean;
  type: string;
  weight: number;

  constructor() {
    this.age = 0;
    this.breed = '';
    this.contact = {
      vetContact: {
        address: '',
        phone: '',
      },
      phone: '',
    };
    this.description = '';
    this.dob = '';
    this.id = '';
    this.image = [''];
    this.location = [0, 0];
    this.name = '';
    this.social = true;
    this.type = '';
    this.weight = 0;
  }
}

export default Pet;
