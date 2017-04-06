import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { EditAlbumComponent } from './../edit-album/edit-album.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit  {
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  sortValue = "all";

  constructor(
    private router: Router,
    private albumService: AlbumService,
    ) {}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
 }

 goToDetailPage(clickedAlbum) {
   this.router.navigate(['albums', clickedAlbum.$key]);
 }

 setSortValue(value: string) {
   this.sortValue = value;
 }
}
