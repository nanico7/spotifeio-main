import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: 'app-player',
    imports: [],
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PlayerComponent implements OnInit{
    ngOnInit(): void {
       

    }
}