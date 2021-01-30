import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-player',
  templateUrl: './actions-player.component.html',
  styleUrls: ['./actions-player.component.scss']
})
export class ActionsPlayerComponent implements OnInit {
  attackSp: number;
  turns = [];
  @Input() monsterHealth: number;
  setHealth = 3;
  playerHealth: number;
  @Input() gameIsRunning: boolean;
  @Input() user: any;


  constructor() { }

  ngOnInit() {
  }

  public attack() {
    if (this.user.pokemon.attack_spe === 0) {
      this.user.pokemon.attack_spe = this.user.pokemon.attack_spe;
    } else {
      this.user.pokemon.attack_spe--;
    }
    const damage = this.calculateDamage(3, 10);
    this.turns.unshift({
      isPlayer: true,
      text: 'Player hits Monster for ' + damage
    });
    this.monsterHealth -= damage;
    this.monsterAttacks();
    if (this.checkWin()) {
      return;
    }
  }

  public specialAttack() {
    if (this.user.pokemon.attack_spe === 0) {
      const damageSp = this.calculateDamage(10, 20);
      this.monsterHealth -= damageSp;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damageSp
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      this.user.pokemon.attack_spe = 5;
    } else {
      this.turns.unshift({
        isPlayer: true,
        text: 'Cant active now Special attack'
      });
    }
  }

  public heal() {
    const health = 10;
    this.setHealth -= 1;
    if (this.setHealth >= 0) {
      if (this.user.pokemon.attack_spe === 0) {
        this.user.pokemon.attack_spe = this.user.pokemon.attack_spe;
      } else {
        this.user.pokemon.attack_spe--;
      }
      this.monsterAttacks();
      if (this.user.pokemon.pv <= 90) {
        this.user.pokemon.pv += health;
      } else {
        this.user.pokemon.pv = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for ' + health
      });
    } else {
      this.setHealth = 0;
      this.turns.unshift({
        isPlayer: true,
        text: 'You cant Health anymore !'
      });
    }
  }

  public giveUp() {
    this.gameIsRunning = false;
  }

  public monsterAttacks() {
    const damageMonster = this.calculateDamage(5, 12);
    this.user.pokemon.pv -= damageMonster;
    // this.checkWin();
    this.turns.unshift({
      isPlayer: false,
      text: 'Monster hits Player for ' + damageMonster
    });
  }

  public calculateDamage(minDamage: number, maxDamage: number) {
    return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
  }

  public checkWin() {
    if (this.monsterHealth <= 0) {
      if (confirm('You won! New Game?')) {
        // this.startGame();
        this.setHealth = 3;
      } else {
        this.gameIsRunning = false;
        this.monsterHealth = 0;
      }
      return true;
    } else if (this.user.pokemon.pv <= 0) {
      if (confirm('You lost! New Game?')) {
        // this.startGame();
        this.setHealth = 3;
      } else {
        this.gameIsRunning = false;
        this.user.pokemon.pv = 0;
      }
      return true;
    }
    return false;
  }

}
