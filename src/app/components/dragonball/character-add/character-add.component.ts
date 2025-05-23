import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacterParameter: Character = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacterParameter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
