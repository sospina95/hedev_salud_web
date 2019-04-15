import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable()
export class MessagingService {
  messaging = firebase.messaging()
  constructor(db: AngularFireDatabase) { }
}