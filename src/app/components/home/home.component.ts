import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game, APIResponse } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = '';
  public games: Array<Game> = [];
  private routSub: Subscription = Subscription.EMPTY;
  private gameSub: Subscription = Subscription.EMPTY;

  constructor( private httpService: HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.routSub = this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    })
  }

  searchGames(sort: string, search?: string){
    this.gameSub = this.httpService.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(this.games)
    })

  }

  openGameDetails(gameId: string): void {
    this.router.navigate(['details', gameId]);
  }

  ngOnDestroy(): void {
    this.routSub.unsubscribe();
    this.gameSub.unsubscribe();
  }

}
