import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor() { }

    async obterUrlLogin(): Promise<string> {
        const authPoint = `${SpotifyConfiguration.authEndpoint}?`;
    }
}