import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  titleDraft = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isFinite(id) || id <= 0) {
      this.loading = false;
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.titleDraft = album.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    const updatedAlbum: Album = {
      ...this.album,
      title: this.titleDraft.trim() || this.album.title
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.titleDraft = album.title;
      }
    });
  }

  backToAlbums(): void {
    this.location.back();
  }
}
