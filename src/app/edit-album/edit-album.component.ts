import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service'

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})

export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumtoUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }

}