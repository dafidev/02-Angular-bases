import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

// DI (dependency injection) always as singletone
@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list: Character[]) => [...list, newCharacter]);
  }
}
