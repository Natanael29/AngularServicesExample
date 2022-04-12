import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EpisodesService } from '../services/episodes/episodes.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit, AfterViewInit {

  episodes: any = {};
  @ViewChild(MatPaginatorModule) private paginator!: MatPaginatorModule;
  displayedColumns: string[] = ['name', 'air_date', 'episode'];

  constructor(private service: EpisodesService) {}
  
  ngOnInit(): void {
    this.service.getAllEpisodes().subscribe(episodes => {
      this.episodes = episodes;
    });
  }

  // Intento de paginar (no funciona)
  ngAfterViewInit(): void {
    this.episodes.paginator = this.paginator;
  }
}
