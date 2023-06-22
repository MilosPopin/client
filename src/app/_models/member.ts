import { Photo } from "./photo";

export interface Member {
    photoUrl: string;
    username: string;
    gender: string;
    dateOfBirth: string;
    age: string;
    knownAs: string;
    created: Date;
    lastActive: Date;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }

  

  
  