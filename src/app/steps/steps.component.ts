import {Component, OnInit} from '@angular/core';
import {Step} from '../Step';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  providers: [ConfirmationService]
})
export class StepsComponent implements OnInit {
  numbers: Step[];
  cur_player: string;
  max_step: number;
  cur_location: number;
  is_game_started: boolean;
  show_rule_view: boolean;

  openCard(num: Step, index: number): void {
    if (!this.checkVal(index)) {
      return;
    }

    if (this.cur_player === 'p1') {
      this.cur_player = 'p2';
    } else {
      this.cur_player = 'p1';
    }
    this.cur_location = index;
    num.state = this.cur_player;
    this.fillGap(index);
    this.checkWinner(index);
  }

  checkVal(index: number): boolean {
    if (!this.is_game_started) {
      if ((index === 0 || index === 1 )) {
        this.is_game_started = true;
        return true;
      } else {
        return false;
      }
    }

    if (index - this.cur_location > this.max_step) {
      return false;
    } else if (index  - this.cur_location <= 0) {
      return false;
    } else {
      return true;
    }
  }

  fillGap(index: number) {

    if (index > 0 && this.numbers[index - 1].state === 'b') {
      this.numbers[index - 1].state = this.cur_player;
    }
  }

  showRule(): void {
    this.show_rule_view = true;
  }

  refresh(): void {
    this.ngOnInit();
  }

  checkWinner(index: number) {
    console.log(index);
    if (index === 19) {
      this.confirmationService.confirm({
        message: this.cur_player + '胜利',
        accept: () => {
          console.log('ok');
          this.refresh();
        },
        rejectVisible: false,
        acceptLabel: '确定'
      });
    }
  }

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    /*初始化*/
    this.numbers = [];
    this.cur_player = 'p1';
    this.is_game_started = false;
    for (let i = 0; i < 20; i++) {
      let step: Step;
      step = new Step();
      step.number = i + 1;
      step.state = 'b';
      this.numbers.push(step);
    }
    this.max_step = 2;
    this.cur_location = 0;
    this.show_rule_view = false;
  }

}
